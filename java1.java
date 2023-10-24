import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Create the array list
        List<Integer> originalList = new ArrayList<>();
        originalList.add(1);
        originalList.add(2);
        originalList.add(3);
        originalList.add(4);
        originalList.add(5);
        originalList.add(6);
        originalList.add(7);

        // Shuffle the list
        Collections.shuffle(originalList);

        // Print the shuffled list
        System.out.println("Shuffled list: " + originalList);
    }
}
