package org.objectscape.candide

import com.google.common.collect.ImmutableList

interface Versionable {

    // by default no primary keys, redefine in concrete subclass as appropriate
    fun keys() : ImmutableList<String>? = null

    fun toSnapshot(): Snapshot
    fun fromSnapshot(snapshot : Snapshot)

}