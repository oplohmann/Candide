package org.objectscape.candide.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.objectscape.candide.Versionable;
import org.objectscape.candide.Snapshot;

import java.util.List;
import java.util.Objects;

@Getter
@Setter
@ToString
public class ItemNoneNullableJava implements Versionable {

    private int varA;
    private long varB;
    private float varC;
    private double varD;
    private char varE;
    private String varF;

    public ItemNoneNullableJava() {
    }

    public ItemNoneNullableJava(int varA, long varB, float varC, double varD, char varE, String varF) {
        this.varA = varA;
        this.varB = varB;
        this.varC = varC;
        this.varD = varD;
        this.varE = varE;
        this.varF = varF;
    }

    @Nullable
    @Override
    public List<String> keys() {
        return null;
    }

    @NotNull
    @Override
    public Snapshot toSnapshot() {
        return new Snapshot()
                .put("varA", varA)
                .put("varB", varB)
                .put("varC", varC)
                .put("varD", varD)
                .put("varE", varE)
                .put("varF", varF);
    }

    @Override
    public void fromSnapshot(@NotNull Snapshot snapshot) {
        varA = snapshot.get("varA");
        varB = snapshot.get("varB");
        varC = snapshot.get("varC");
        varD = snapshot.get("varD");
        varE = snapshot.get("varE");
        varF = snapshot.get("varF");
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItemNoneNullableJava that = (ItemNoneNullableJava) o;
        return varA == that.varA && varB == that.varB && Float.compare(that.varC, varC) == 0 && Double.compare(that.varD, varD) == 0 && varE == that.varE && Objects.equals(varF, that.varF);
    }

    @Override
    public int hashCode() {
        return Objects.hash(varA, varB, varC, varD, varE, varF);
    }
}
