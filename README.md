# HW03C Notes

This homework is to follow Sol LeWitt's artwork instruction to create a pattern formed by lines. I assume that the number of randomly generated dots is even, and all the randomly generated dots are connected by pairs. Therefore, the workflow is as follows: 
<ol>
  <li>First, the code randomly generates dots in the range of the canvas size. The number of dots is preset and stored in an integer variable. </li>
  <li>Next, the code creates an object called "dot", which contains the position information of a dot. </li>
  <li>Then, the code stores all the "dot" objects in an array called "dots."</li>
  <li>Finally, the code sequentially goes through half of the dots in the "dots" array and connects the j-th dot to the (j + (number of dots)/2)-th dot in pairs. This is done by a for loop. </li>
</ol>

Below are the outcomes of 50-dot connections and 200-dot connections. 

## 50-dot Connections
![50-dot Connections](./hw03c-1.png "50-dot Connections")

## 200-dot Connections
![200-dot Connections](./hw03c-2.png "200-dot Connections")
