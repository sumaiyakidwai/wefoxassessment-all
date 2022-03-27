# Part 3: Reflection on the automation exercise

The browser based UI test that I automated falls in the category of **Integration testing**. This is because the test goes over several modules of the application to add the item to the cart, for example the search functionality, the add to cart functionality are two separate units of the application and they are tested together. The advantage of integration testing 
is that it mimics user behavior and therefore ensures a quicker acceptance rate by the consumer if the tests work as expected. The disadvantage is that they are slightly lengthy, meaning that the tests would need more time to execute and produce results, and in the case where the release is not related to all the modules involved in an integration test but only one or two parts, running the whole test or test suite would just add delay to the release process without adding any value.
However, the scenario I automated is a basic requirement of the web application, since it is a lego shop, so I think it is a good candidate for **smoke testing** too, since whatever changes are added to the application, the adding to cart functionality should not break.

***Other possibilities:***

 **1. Unit tests**
 The test could be broken down into several smaller unit tests where each module of the application could be tested independently, i.e. accepting cookies, search, add to cart.
 **Pros:**
  - Finds problems before further testing so they would be fixed before further bits of code are added.
 - Better quality of code which makes integration simpler.
 - Reduces bug fixing costs.

**Cons:**

 - Added cost in the development process to take out time and resources to write and maintain unit tests.


 **2. Sanity tests**
Instead of one test to run over several modules of the application, the test should be broken down into multiple sanity tests of each module, e.g. search.
 **Pros:**
  - Better code coverage.
 - More chances of finding valid defects due to thorough testing.
 - Smaller test cases resulting in quicker results.
 - Are separated into different modules so can be run with each release according to where the new changes were introduced.
 - The build can be rejected if sanity tests fail, avoiding the time spent to run regression tests on a bad build.

**Cons:**

 - Not automated most of the times therefore require manual intervention and thus take more time in the overall execution.

 **3. End to End tests/ System tests**
 Since the test I wrote stops at adding an item to the cart, this could be extended to include checkout functionality so that a whole user session is copied and tested.
