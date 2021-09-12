package org.objectscape.candide

class ClassBasedVersionStore {

    private val versions = mutableListOf<Version>()

    fun createNewVersion(trxCount: Long): Snapshot {
        synchronized(versions) {
            if(versions.isEmpty()) {
                val map = Snapshot()
                versions.add(Version(trxCount, map))
                return map
            }
            val cloneOfLastVersion = Snapshot(versions.getLast().snapshot)
            versions.add(Version(trxCount, cloneOfLastVersion))
            return cloneOfLastVersion
        }
    }

}