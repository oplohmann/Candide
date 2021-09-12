package org.objectscape.candide.model

import com.google.common.collect.ImmutableList
import org.objectscape.candide.Snapshot
import org.objectscape.candide.Versionable

class KeyedItem(var varA: String = "", var varB: Int = 0, var varC: Float = 0f, var varD: Double = 0.0) : Versionable {

    override fun keys(): ImmutableList<String>? {
        return ImmutableList.of("varA")
    }

    override fun toSnapshot(): Snapshot {
        return Snapshot().put("varA", varA).put("varB", varB).put("varC", varC)
    }

    override fun fromSnapshot(snapshot: Snapshot) {
        /*
        varA = map.getOrDefault("varA", "") as String?
        varB = map.getOrDefault("varB", 0) as Int?
        varC = map.getOrDefault("varA", 0f) as Float?
        varD = map.getOrDefault("varA", 0f) as Double
         */
    }

}