### 4.0 Summary of Utility
##### What is Utility?
Historically, utility was thought of as a measure of happiness, but economists found this idea difficult to quantify. Now, utility is simplify a way to **represent consumer prefernces**. It's used to rank bundles of goods based on preference, without worrying about the exact amount of "happiness" each bundle provides.
##### Ordinal Utility
- Ordinal Utility means that only the order matters. A higher utility number indicates a preferred bundle, but the actual number is irrelevant. 
- Example: If Bundle A has utility 3 and Bundle B has utility 2, A is preferred to B. However, the difference between 3 and 2 doesn't mean much; it only shows the order of preference.
##### Monotonic Transformations
- A monotonic transformation changes utility values but keeps the order of preferences the same.
- Examples of monotonic transformations:
	- Multiplying by a positive number (e.g., $f(u)=3u$)
	- Adding a constant (e.g., $f(u)=u+5$)
	- Raising $u$ to an odd power (e.g., $f(u)=u^3$)

![[Pasted image 20241029161721.png]]
##### Graph Explained
- Graph A shows a monotonic function, which always increases. Any increase in $u$ leads to an increase in $v$, preserving the order.
- Graph B shows a non-monotonic function, where $v$ sometimes increases and sometimes decreases. This does not preserve the order of preferences.
##### Why Monotonic Transformations Matter
- **Relabelling Indifference Curves:** A utility function labels each indifference curve with a utility value. A monotonic transformation is just a way to relabel these curves while keeping the order the same.
- As long as preferred bundles have higher utility numbers after transformation, it represents the same preferences. 
##### Key Takeaway
- Utility values are only meaningful for ranking preferences, not for measuring "happiness".
- **Monotonic Transformations** allow us to change utility values while keeping the preference order the same, making them useful for flexible representation of consumer preferences. 

---
### 4.1 Cardinal Utility
- **Definition:** Cardinal utility theories gives importance to the size of the utility difference between bundles, not just the order. It suggests that utility values themselves have meaning, like saying one bundle provides "twice as much" utility as another.
##### Problems with Cardinal Utility
1. **Difficult to Measure:** While it's easy to observe if someone prefers one bundle over another (ordinal utility), it's much harder to tell if they like one bundle "twice as much" as another.
2. **Ambiguous definitions**
	- You could define "twice as much" as being willing to pay twice as much for one bundle, wait twice as long for it, or take twice the risk to get it.
	- However, none of these definitions feel natural or necessary, as they don't add anything meaningful to how we predict choices.
3. **Not Useful for Choice Behaviour:** In predicting choices, we only need to know which bundle is preferred - not by how much.
##### Key Takeaway
**Ordinal Utility** (the ranking of preference) is enough for understanding choices. Since there's no compelling way to assign meaningful magnitudes to utility differences, economists stick to ordinal utility, which simply ranks bundles without attaching meaning to the numbers themselves.

---
### 4.2 Constructing a Utility Function
Goal: To label each indifference curve with a number, creating a utility function that ranks preferences. Higher curves (more preferred bundles) get larger numbers.

![[Pasted image 20241029162825.png]]
##### Method for Drawing the Graph
1. **Draw a Diagonal Line:** Start from the origin and extend it outwards. This line intersects with each indifference curve.
2. **Measure Distance:** For each indifference curve, measure its distance from the origin along this diagonal line.
3. **Assign Labels:** Use these distances as labels for the curves, so bundles on higher curves get larger labels.

---
### 4.3 Examples of Utility Functions
Utility functions represent preferences, and the indifference curves are the level sets of these functions.
##### Example 1
Utility function $u(x_1, x_2) = x_1x_2$ 
1. The indifference curves are given by setting $u(x_1, x_2) = k$, so $x_1x_2 = k$ .
2. Rearrange to get $x_2 = \frac {k}{x_1}$, which shows the indifference curves for different $k$ values.
	- For example, when $k=1$,$k=2$, and $k=3$, each curve represents a different level of utility with higher values of $k$ indicate more preferred bundles.
##### Example 2
Utility function $v(x_1,x_2)=x_1^2x_2^2$ 
1. Notice that $v(x_1,x_2)=(x_1x_2)^2$ = $u(x_1,x_2)^2$ 
2. Since $v(x_1,x_2)$ is just the square of $u(x_1,x_2)$, it represents the same preferences but with squared labels for indifference curves (like 1, 4, 9).
	- The shape of the indifference curves remains the same, but the number assigned to each level (each curve) are different.
##### Finding a Utility Function from Indifference Curves
There are two main approaches:
1. Mathematical: Find a function that remains constant along each indifference curve and increases for higher curves.
2. Intuitive: Think about what the consumer aims to maximise (i.e., the combination of goods that aligns with their preferences).

---
### 4.3.1 Perfect Substitutes
##### Key Example
Red Pencil and Blue Pencil Example: The consumer only cares about the total number of pencils, not their colour.

- Utility function $u(x_1, x_2) = x_1 + x_2$
	- This function works because
		1. It's constant along the indifference curves.
		2. It assigns higher values to more preferred bundles.
- Alternative utility function $v(x_1, x_2) = (x_1 + x_2)^2 = x_1^2 + 2x_1 x_2 + x_2^2$
	- This is a monotonic transformation of $u(x_1, x_2)$, so it also represents the same preferences.
##### Different Substitution Rates
- If the consumer values Good 1 twice as much as good 2 (e.g., requires two units of good 2 to replace one unit of Good 1), the utility function changes to
	- $u(x_1, x_2) = 2x_1 + x_2$
	- This gives an indifference curves a slope of -2, meaning Good 1 is values twice as much as Good 2.
##### General Form of Perfect Substitution 
- Utility function $u(x_1, x_2) = a x_1 + b x_2$
	- Where $a$ and $b$ are positive constants that represent the relative value of each good to the consumer.
	- Slope of Indifference Curve $-\frac{a}{b}$

---
#### 4.3.2 Perfect Complements
##### Key Example
**Left Shoe-Right Shoe Case:** The consumer only cares about pairs of shoes, so the utility is based on the number of complete pairs.
##### Utility function for Perfect Complements
- Utility function $u(x_1, x_2) = \min \{x_1, x_2\}$
	- This function works because it only counts the minimum of each good in the pair (e.g., left shoes and right shoes).
	- **Verification:** For a bundle like $(10,10)$, if we add one more right shoe we get $(11,10)$, the utility remains the same because $\min \{10, 10\} = \min \{11, 10\} = 10$
##### Different Proportions
- Example: If a consumer wants 2 teaspoons of sugar per cup of tea, the utility function changes:
	- $u(x_1, x_2) = \min \{x_1, \frac{1}{2}x_2\}$
		- If there are fewer teaspoons of sugar than needed, only $\frac{1}{2} x_2$ cups of tea can be sweetened correctly.
	- Alternative form: To avoid fractions, we can write the utility as $u(x_1, x_2) = \min \{2x_1, x_2\}$
##### General form for Perfect Complements
- Utility Function $u(x_1, x_2) = \min \{a x_1, b x_2\}$
	- Here, $a$ and $v$ are positive constants indicating the proportion in which the goods are consumed.
#### 4.3.3 Quasilinear Preferences
##### Key Idea
- **Indifference Curves:** In Quasilinear preferences, each indifference curve is a vertically shifted version of the others, as show in the graph. This means each curve is in the same shape but positioned higher or lower based on the value of $k$, representing the different levels of satisfaction.
![[Pasted image 20241029165836.png]]
##### Utility Function
- **Form of Indifference Curve**: $x_2 = k - v(x_1)$
	- Here, $k$ is a constant for each curve, with higher $k$ values indicating higher satisfaction.
- **Utility function**: $u(x_1, x_2) = v(x_1) + x_2$
	- Utility is linear in $x_2$, but nonlinear in $x_1$, which is why it's called quasilinear (partly linear).
##### Examples
1. $u(x_1, x_2) = \sqrt{x_1} + x_2$
2. $u(x_1, x_2) = \ln x_1 + x_2$

---
#### 4.3.4 Cobb-Douglas Preferences
##### Key Idea
- Utility Function: Cobb-Douglas preferences use a utility function of the form:
$$u(x_1, x_2) = x_1^c x_2^d$$
- Where $c$ and $d$ are positive numbers representing the consumer's preferences for each good.

![[Pasted image 20241029170439.png]]
##### Graph Explained
Indifference Curves: Shown in the graph, different values of $c$ and $d$ change the curve's shape.
1. Graph A
	- When $c=1/2$ and $d=1/2$, the curves are symmetrical.
2. Graph B
	- With $c=1/5$ and $d=4/5$, the curves stretch differently, reflecting a stronger preference for $x_2$.
##### Key Notes
- **Well-Behaved Curves:** Cobb-Douglas indifference curves are convex and monotonic, meaning they slope downward and bend towards the origin. They are ideal for illustrating balanced preferences.
- Transformations: A monotonic transformation of this utility function will show the same preferences, for example:
	- Taking the natural log gives $v(x_1, x_2) = c \ln x_1 + d \ln x_2$ which keeps the same shape of the indifference curves.

---
### 4.4 Marginal Utility
