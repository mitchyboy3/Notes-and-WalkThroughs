#The Strategy Patern 
The strategy pattern defines a family of algorithms, encapsulates each one and makes them interchangable. Trategy lets the algorithm vary independantly from clients that use it.

1. Identify the aspects of your app that vary and separate them from what stays the same.
Take what varies and encapsulate it so it doesnt affect the rest of your code.
Take the parts that vary and encapsulate them so that later you can alter or extend the parts that vary without affecting those that dont.

2. Program to an interface, not an implementation.
This way other objects can reuse our methods and behaviors because they are not hidden away in our main class. 
We can also modify behaviors without modifying any of our existing behavior classes or touching any of our main classes that use the behavior. 

This is so we get the benfit of REUSE with out all the bagage that comes along with inheritance. 
Rather than handling the behavior itself the object delegates that behavior to the object represented by the behavior

##The Big Picture on encapsulated behaviors 
Behaviors extending behavior
Rather than thinking of object behaviors as a set of behaviors, we think of them as a family of algorithms.  

3. Favor composition (behavior being composed with the right behavior objec) over inheritance.
Creating systems using composition gives you more flexibility. Not only does it let you encapsulate a family of algorithms into their own set of classes but it also lets you change behavior at runtime. 
Composition is used in MANY design patters. 

When you’re working with data about people, FP works well. 
When you’re trying to simulate people, OOP works well. 