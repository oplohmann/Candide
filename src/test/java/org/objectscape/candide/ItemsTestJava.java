package org.objectscape.candide;

import org.junit.jupiter.api.Test;
import org.objectscape.candide.model.ItemNoneNullableJava;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ItemsTestJava {

    @Test
    public void itemNoneNullable() {
        var itemNoneNullable = new ItemNoneNullableJava(123, 789L, 45.67f, 123.45,'v', "foo");
        var snapshot = itemNoneNullable.toSnapshot();

        var itemNoneNullableFromSnapshot = new ItemNoneNullableJava();
        itemNoneNullableFromSnapshot.fromSnapshot(snapshot);

        assertEquals(itemNoneNullable, itemNoneNullableFromSnapshot);
    }

    @Test
    void snapshotVarMissing() {
        var snapshotVARBMissing = new Snapshot().put("varA", 123).put("varC", 45.57f).put("varD", 123.45).put("varE", 'v').put("varF", "foo");
        var item = new ItemNoneNullableJava();

        var exceptionOccurred = false;

        try {
            item.fromSnapshot(snapshotVARBMissing);
        } catch (SnapshotException e) {
            exceptionOccurred = true;
            assertEquals("Value for variable varB is null. Make sure the value was added to the Snapshot.", e.getMessage());
        }

        assertTrue(exceptionOccurred);
    }

}
