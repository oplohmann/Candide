package org.objectscape.candide.scratch;

import org.objectscape.candide.model.ItemAllValuesNull;

public class JavaScratch {

    public static void main(String[] args) {
        ItemAllValuesNull item = create(new ItemAllValuesNull(null, null, null, null, null,null));
    }

    private static ItemAllValuesNull create(ItemAllValuesNull itemA) {
        return itemA;
    }


}
