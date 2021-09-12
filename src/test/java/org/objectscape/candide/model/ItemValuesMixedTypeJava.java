package org.objectscape.candide.model;

import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.objectscape.candide.Versionable;
import org.objectscape.candide.Snapshot;

import java.util.List;

@Getter
@Setter
public class ItemValuesMixedTypeJava implements Versionable {

    private Long varA;
    private Long varBNullable;

    public ItemValuesMixedTypeJava() {
    }

    public ItemValuesMixedTypeJava(Long varA, Long varBNullable) {
        this.varA = varA;
        this.varBNullable = varBNullable;
    }

    @Nullable
    @Override
    public List<String> keys() {
        return null;
    }

    @NotNull
    @Override
    public Snapshot toSnapshot() {
        return new Snapshot().put("varA", varA).putNullable("varBNullable", varBNullable);
    }

    @Override
    public void fromSnapshot(@NotNull Snapshot snapshot) {
        varA = snapshot.get("varA");
        varBNullable = snapshot.getNullable("varBNullable");
    }
}
