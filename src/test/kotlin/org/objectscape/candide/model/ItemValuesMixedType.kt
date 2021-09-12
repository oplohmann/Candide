package org.objectscape.candide.model

import org.objectscape.candide.Versionable
import org.objectscape.candide.Snapshot

class ItemValuesMixedType(var varA: Long, var varB: Long?)  : Versionable {

    override fun toSnapshot(): Snapshot {
        return Snapshot().add(::varA).addNullable(::varB)
    }

    override fun fromSnapshot(snapshot: Snapshot) {
        snapshot.fill(::varA).fillNullable(::varB)
    }

}