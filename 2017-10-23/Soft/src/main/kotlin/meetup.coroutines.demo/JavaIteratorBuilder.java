/*
This code DO NOT RUN AS EXPECTED.
It should be read as pseudo-code.
This demonstrates how a coroutine is compiled to bytecode:
  1. A class is created
  2. All local variables are migrated as fields in this class
  3. A step variable is added
  4. Every suspension can be summarized as:
    a. Define the number of the suspension
    b. Set the step variable to that number
    c. Return
    d. Put a label just after this return
  5. Have the function start with a goto if the step is not 0
*/

package meetup.coroutines.demo;

@SuppressWarnings("ALL")
public class JavaIteratorBuilder {

    private int next;

    private int m_step = 0;
    private int m_i;

    private void move() {
        switch (m_step) {
            case 1: /* goto step_1; */ break ;
            case 2: /* goto step_2; */ break ;
        }

        m_i = 0;
        while (m_i < 10) {
            if (m_i % 10 == 0) {
                next = m_i;
                m_step = 1;
                return ;
            }
step_1:
            ++m_i;
        }

        m_i = 0;
        while (m_i < 10) {
            if (m_i % 10 == 1) {
                next = m_i;
                m_step = 2;
                return ;
            }
step_2:
            ++m_i;
        }
    }
}
