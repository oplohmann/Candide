package org.objectscape.candide.model

import org.objectscape.candide.Versionable
import org.objectscape.candide.Snapshot

class ItemNoneNullable(var varA: Long = 0, var varB: Float = 0f, var varC: Double = 0.0, var varD: Char = Char.MIN_VALUE, var varE: String = "") : Versionable {

    override fun toSnapshot(): Snapshot {
        return Snapshot().add(::varA).add(::varB).add(::varC).add(::varD).add(::varE)
    }

    override fun fromSnapshot(snapshot: Snapshot) {
        snapshot.fill(::varA).fill(::varB).fill(::varC).fill(::varD).fill(::varE)
    }

}