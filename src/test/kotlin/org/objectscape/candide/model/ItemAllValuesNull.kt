package org.objectscape.candide.model

import org.objectscape.candide.Snapshot
import org.objectscape.candide.Versionable

class ItemAllValuesNull(var varA: String? = "", var varB: Int? = 0, var varC: Long? = 0, var varD: Float?, var varE: Double?, var varF: Char?) : Versionable {

    constructor() : this(null, null, null, null, null, null)

    override fun toSnapshot(): Snapshot {
        return Snapshot()
            .addNullable(::varA)
            .addNullable(::varB)
            .addNullable(::varC)
            .addNullable(::varD)
            .addNullable(::varE)
            .addNullable(::varF)
    }

    override fun fromSnapshot(snapshot: Snapshot) {
        snapshot
            .fillNullable(::varA)
            .fillNullable(::varF)
            .fillNullable(::varB)
            .fillNullable(::varC)
            .fillNullable(::varD)
            .fillNullable(::varE)
    }

}