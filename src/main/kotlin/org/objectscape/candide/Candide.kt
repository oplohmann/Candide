package org.objectscape.candide

class Candide {

    companion object {

    }

    private val versionStore = VersionStore()

    fun startTransaction(): Transaction {
        return Transaction(versionStore)
    }

}