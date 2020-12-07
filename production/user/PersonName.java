package production.user;

import static java.util.Objects.requireNonNull;
import static production.util.AppUtil.checkArgument;

public class PersonName {

    public static final String INVALID_PERSON_NAME_MESSAGE =
            "Your name should only contain alphanumeric characters and spaces, " +
                    "and it should not be blank." +
                    "Unless your father is Elon Musk, of course.";

    /*
     * The first character of the address must not be a whitespace,
     * otherwise " " (a blank string) becomes a valid input.
     */
    public static final String VALIDATION_REGEX = "[\\p{Alnum}][\\p{Alnum} ]*";

    public final String fullName;

    public PersonName(String name) {
        requireNonNull(name);
        checkArgument(isValidName(name), INVALID_PERSON_NAME_MESSAGE);
        fullName = name;
    }

    public static boolean isValidName(String test) {
        return test.matches(VALIDATION_REGEX);
    }

    @Override
    public String toString() {
        return fullName;
    }

    @Override
    public boolean equals(Object other) {
        return other == this
                || (other instanceof PersonName
                && fullName.equals(((PersonName) other).fullName));
    }

}
