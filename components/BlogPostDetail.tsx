'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BlogPost } from './Blog'
import BlogLikes from './BlogLikes'

const blogPostsData: Record<string, BlogPost & { content: string }> = {
  '1': {
    id: '1',
    title: 'Why Framework "Magic" Can Be More Dangerous Than Plain Java',
    excerpt:
      'Frameworks are great at reducing boilerplate, until they start hiding important details. @SneakyThrows is a good example of how framework magic can make code look cleaner but hide critical exception contracts.',
    date: '2024-12-15',
    author: 'Marina',
    tags: ['Spring', 'Java', 'SneakyThrows'],
    readTime: '6 min',
    content: `
# Why Framework "Magic" Can Be More Dangerous Than Plain Java

Frameworks are great at reducing boilerplate, until they start hiding important details.

![Why Framework Magic Can Be More Dangerous Than Plain Java](/java-frameworks.jpg)

\`@SneakyThrows\` is a good example. It removes the need to declare or catch checked exceptions, making the code look cleaner at first glance. But that "magic" comes at a cost: the method's exception contract becomes invisible.

## When exceptions aren't explicit:

- Callers don't know what can fail
- Error handling becomes accidental instead of intentional
- Debugging and maintenance get harder over time

In plain Java, checked exceptions force you to make decisions. You either handle the failure or consciously propagate it. That friction is not a flaw, it's a design signal.

Using \`@SneakyThrows\` may feel like a shortcut, but shortcuts tend to accumulate invisible debt. Readability, explicit contracts, and predictable behavior usually age much better than convenience.

## My Approach

Personally, I avoid \`@SneakyThrows\`. I prefer explicit exception handling, wrapping exceptions when needed, or designing clearer exception contracts. These approaches make failures visible, code easier to reason about, and systems safer to evolve over time.

Frameworks should help us write better code not hide the complexity we still need to understand.

## What do you think?

Have you ever had problems caused by \`@SneakyThrows\`? Do you like using it, or do you prefer more explicit approaches? Let me know what do you think about sneaky throws and also your experiences with other framework features that look like magic, but end up doing more harm than good in the long run.
    `,
  },
  '2': {
    id: '2',
    title: "BigO Isn't Performance And That's Where Many Engineers Get Stuck",
    excerpt:
      'Why can two O(n) algorithms feel completely different in practice? Understanding the separation between BigO and real performance helps you make better engineering decisions.',
    date: '2025-12-28',
    author: 'Marina',
    tags: ['Algorithms', 'BigO', 'Performance'],
    readTime: '7 min',
    content: `
# BigO Isn't Performance And That's Where Many Engineers Get Stuck

Why can two O(n) algorithms feel completely different in practice?

If you've ever wondered that, you're not alone.

This is one of the most common and least obvious difficulties engineers face when learning algorithms and complexity analysis. It usually doesn't affect beginners. It appears once you already have real-world experience and your intuition starts to clash with theory.

![BigO Notation Visualization](/bigo-image.jpg)

## The mental trap

We're trained to think in terms of what feels expensive:

- More loops feel slower
- More objects feel heavier
- Linked lists feel more complex than arrays

So when we learn that two sequential loops can still be O(n), or that iterating over an ArrayList and a LinkedList are both O(n), something feels wrong.

If arrays and linked lists allocate memory differently, shouldn't that change BigO?

## What BigO does not measure

BigO does **not** measure:

- Real execution time
- Cache efficiency or memory layout
- CPU-level behavior

BigO describes how the number of operations grows as input size grows.

In other words, it tells you the shape of the curve, not how high the curve is.

That's why two O(n) algorithms can behave very differently in practice.

Constants, memory access patterns, and hardware effects still matter, BigO simply chooses to ignore them.

## Why this matters in real engineering

Understanding this separation helps you make better decisions:

- BigO helps you avoid solutions that won't scale
- Implementation details make solutions fast in reality

If you only think in BigO, you might ignore cache locality and memory pressure.

If you only think in performance details, you might ship something that collapses at scale.

Good engineers need both!
    `,
  },
  '3': {
    id: '3',
    title: 'List, Set, and Map: Key Differences in Java Collections',
    excerpt:
      'When working with Java, understanding the differences between List, Set, and Map is essential. This post gives you the big picture before we dive into real-world systems.',
    date: '2026-01-03',
    author: 'Marina',
    tags: ['Java', 'Collections'],
    readTime: '4 min',
    content: `
# List, Set, and Map: Key Differences in Java Collections

![List, Set, and Map Overview](/set-map-list.jpg)

When working with Java, understanding the differences between List, Set, and Map is essential.

## List

- Ordered collection, allows duplicates  
- Access by index  
- Common implementations: ArrayList, LinkedList  
- Real-world example: storing a user's transaction history  
- Use case: showing transactions in the exact order they occurred

\`\`\`java
List<Transaction> transactions = new ArrayList<>();
transactions.add(new Transaction("Deposit", 100));
transactions.add(new Transaction("Withdrawal", 50));
transactions.add(new Transaction("Deposit", 200)); // duplicates allowed
\`\`\`

## Set

- Collection of unique elements (no duplicates)  
- Order depends on implementation (HashSet, LinkedHashSet, TreeSet)  
- Real-world example: each account number must be unique  
- Use case: preventing duplicate account entries in the system

\`\`\`java
Set<String> set = new HashSet<>();
set.add("apple");
set.add("banana");
set.add("apple"); // ignored
\`\`\`

## Map

- Stores key-value pairs  
- Keys must be unique, values can repeat  
- Common implementations: HashMap, LinkedHashMap, TreeMap  
- Real-world example: account number as the key and balance as the value  
- Use case: quickly looking up the balance for a specific account

\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("apple", 3);
map.put("banana", 5);
map.put("apple", 10); // overwrites previous
\`\`\`

## Think

- List → array with duplicates  
- Set → bag of unique elements  
- Map → dictionary or phonebook  

If you want to see how these structures show up in real systems, especially in finance, check out
<a href="/blog/4" class="text-primary-400 underline">Java Collections in Real Systems | Part 1: Set</a>.
  `,
  },
  '4': {
    id: '4',
    title: 'Java Collections in Real Systems | Part 1: Set',
    excerpt:
      'Set is the right choice when uniqueness is a business rule, not just a technical constraint. This is the first part of a series on how Java Collections map to real systems.',
    date: '2026-01-08',
    author: 'Marina',
    tags: ['Java', 'Collections', 'Set'],
    readTime: '6 min',
    content: `
# Java Collections in Real Systems | Part 1: Set

![Set in Java Collections](/set.jpg)

When working with Java, choosing the right collection is not an implementation detail. It is a modeling decision.

This is the first post in a short series about Java Collections and how they translate into real-world systems, especially in financial services.

Set is the right choice when uniqueness is a business rule, not just a technical constraint.

## Set

- Collection of unique elements only  
- No access by index  
- Ordering depends on the chosen implementation

## HashSet

- No guaranteed order  
- Very fast add, remove, and contains (average O(1))  
- Use case: preventing duplicate transaction processing

\`\`\`java
Set<String> processedTransactions = new HashSet<>();
processedTransactions.add("TX1001");
processedTransactions.add("TX1002");
processedTransactions.add("TX1003");
processedTransactions.add("TX1002"); // duplicate ignored
\`\`\`

## LinkedHashSet

- Preserves insertion order  
- Slightly slower than HashSet  
- Use case: audit events with traceability

\`\`\`java
Set<String> auditEvents = new LinkedHashSet<>();
auditEvents.add("LOGIN");
auditEvents.add("TRANSFER");
auditEvents.add("LOGOUT");
auditEvents.add("TRANSFER"); // duplicate ignored, order preserved
\`\`\`

## TreeSet

- Elements stored in sorted order  
- Uses natural ordering or Comparator  
- Use case: sorted limits or thresholds

\`\`\`java
Set<BigDecimal> limits = new TreeSet<>();
limits.add(new BigDecimal("1000"));
limits.add(new BigDecimal("500"));
limits.add(new BigDecimal("2000"));
limits.add(new BigDecimal("1000")); // duplicate ignored
\`\`\`

## Think

- HashSet → fastest uniqueness guarantee  
- LinkedHashSet → uniqueness + order  
- TreeSet → uniqueness + sorting  

If you want the big-picture comparison between List, Set, and Map, read the intro:
<a href="/blog/3" class="text-primary-400 underline">List, Set, and Map: Key Differences in Java Collections</a>.

Next in the series:
<a href="/blog/5" class="text-primary-400 underline">Java Collections in Real Systems | Part 2: List</a>.
    `,
  },
  '5': {
    id: '5',
    title: 'Java Collections in Real Systems | Part 2: List',
    excerpt:
      'If Set is about uniqueness, List is about order and position. This post explores how ArrayList and LinkedList show up in real workflows.',
    date: '2026-01-09',
    author: 'Marina',
    tags: ['Java', 'Collections', 'List'],
    readTime: '6 min',
    content: `
# Java Collections in Real Systems | Part 2: List

![List in Java Collections](/list.jpg)

If Set is about uniqueness, List is about order and position.

Duplicates are allowed and index-based access becomes part of the contract.

## List

- Ordered collection  
- Allows duplicate elements  
- Access by index

## ArrayList

- Fast random access  
- Ideal for read-heavy scenarios  
- Use case: transaction history

\`\`\`java
List<String> transactions = new ArrayList<>();
transactions.add("TX1001");
transactions.add("TX1002");
transactions.add("TX1003");
transactions.add("TX1002"); // duplicate allowed
\`\`\`

## LinkedList

- Fast insertions and removals  
- Slower index access  
- Use case: processing steps in a workflow

\`\`\`java
List<String> workflowSteps = new LinkedList<>();
workflowSteps.add("VALIDATE");
workflowSteps.add("AUTHORIZE");
workflowSteps.add("SETTLE");
workflowSteps.add("AUTHORIZE"); // duplicate allowed
\`\`\`

## Think

- Use List when order is meaningful  
- ArrayList → fast reads and index access  
- LinkedList → frequent insertions and removals  

If you want the big-picture comparison between List, Set, and Map, read the intro:
<a href="/blog/3" class="text-primary-400 underline">List, Set, and Map: Key Differences in Java Collections</a>.

Previous in the series:
<a href="/blog/4" class="text-primary-400 underline">Java Collections in Real Systems | Part 1: Set</a>.

Next in the series:
<a href="/blog/6" class="text-primary-400 underline">Java Collections in Real Systems | Part 3: Map</a>.
    `,
  },
  '6': {
    id: '6',
    title: 'Java Collections in Real Systems | Part 3: Map',
    excerpt:
      'If List is about order and Set about uniqueness, Map is about relationships. Everything revolves around key → value, and that maps directly to many business rules.',
    date: '2026-01-10',
    author: 'Marina',
    tags: ['Java', 'Collections', 'Map'],
    readTime: '6 min',
    content: `
# Java Collections in Real Systems | Part 3: Map

If List is about order and Set about uniqueness, Map is about relationships.

Everything revolves around key → value.

## Map

- No duplicate keys  
- Each key maps to one value  
- Fast lookups by key

## HashMap

- No guaranteed order  
- Very fast access  
- Use case: account balance lookup

\`\`\`java
Map<String, BigDecimal> balances = new HashMap<>();
balances.put("ACC1", new BigDecimal("1000"));
balances.put("ACC2", new BigDecimal("2500"));
balances.put("ACC3", new BigDecimal("500"));
balances.put("ACC2", new BigDecimal("3000")); // value overwritten
\`\`\`

## LinkedHashMap

- Preserves insertion order  
- Use case: ordered configuration rules

\`\`\`java
Map<String, String> rules = new LinkedHashMap<>();
rules.put("RULE1", "VALIDATE");
rules.put("RULE2", "AUTHORIZE");
rules.put("RULE3", "SETTLE");
rules.put("RULE2", "REAUTHORIZE"); // overwrites value, keeps order
\`\`\`

## TreeMap

- Keys stored in sorted order  
- Use case: tiered pricing or limits

\`\`\`java
Map<Integer, String> riskLevels = new TreeMap<>();
riskLevels.put(3, "HIGH");
riskLevels.put(1, "LOW");
riskLevels.put(2, "MEDIUM");
riskLevels.put(2, "MEDIUM_PLUS"); // overwrites value
\`\`\`

## Think

- HashMap → fastest key-based access, no ordering guarantees  
- LinkedHashMap → predictable iteration order with slight overhead  
- TreeMap → sorted keys using natural order or Comparator  

If you want the big-picture comparison between List, Set, and Map, read the intro:
<a href="/blog/3" class="text-primary-400 underline">List, Set, and Map: Key Differences in Java Collections</a>.

Previous in the series:
<a href="/blog/5" class="text-primary-400 underline">Java Collections in Real Systems | Part 2: List</a>.

Next: Ready to test your understanding?
<a href="/blog/19" class="text-primary-400 underline">🧠 From Java Collections to Interview Readiness</a>.
    `,
  },
  '7': {
    id: '7',
    title: 'Why "It Works in Tests" Is Not the Same as "It Works in Production"?',
    excerpt:
      'Have you ever had something that worked perfectly in tests but failed in production? Passing all tests doesn\'t automatically mean your system is ready for what will actually happen in production.',
    date: '2025-12-30',
    author: 'Marina',
    tags: ['Testing', 'Production', 'Engineering'],
    readTime: '7 min',
    content: `
# Why "It Works in Tests" Is Not the Same as "It Works in Production"?

Have you ever had something that worked perfectly in tests but failed in production?

![Why It Works in Tests Is Not the Same as It Works in Production](/fail.jpg)

At some point in your career, you start realizing that passing all tests doesn't automatically mean your system is ready for what will actually happen in production, and this realization usually comes after you have already seen things break in ways no test ever predicted.

## In tests, everything is controlled and polite

The data looks reasonable, traffic is limited, dependencies respond on time, and failures happen in isolation instead of all at once.

## Production behaves very differently

Users don't follow the happy path, traffic doesn't grow linearly, small delays accumulate, retries amplify pressure, and suddenly a piece of code that always "worked fine" starts showing its weaknesses.

This is where many systems struggle, not because the logic is wrong, but because they were built to be correct, not to be resilient.

Correctness answers the question of whether something works under ideal conditions.

Engineering maturity shows up when you start asking whether it will still work when latency increases, when services slow down, when the database is under pressure, and when multiple small problems happen at the same time.

That's why concerns like caching, timeouts, backpressure, graceful degradation, and observability stop being optional details and start becoming essential design decisions.

Over time, you also realize that the most dangerous problems are rarely obvious bugs. They are hidden assumptions that only reveal themselves under real load and real stress.

Production doesn't reward code that only looks clean or elegant.

It rewards systems that behave predictably when things get messy.

And learning to design for that reality is one of the biggest shifts that separates writing code from engineering systems.
    `,
  },
  '8': {
    id: '8',
    title: 'JPARepository vs CRUDRepository: What\'s the difference?',
    excerpt:
      'If you\'ve been working with Spring Data JPA, you\'ve probably noticed that sometimes we extend CrudRepository, and other times, JpaRepository. But, what\'s really the difference between them?',
    date: '2025-11-04',
    author: 'Marina',
    tags: ['Spring', 'Java', 'JPA'],
    readTime: '5 min',
    content: `
# JPARepository vs CRUDRepository: What's the difference?

If you've been working with Spring Data JPA for a while, you've probably noticed that sometimes we extend CrudRepository, and other times, JpaRepository.

But, what's really the difference between them?

Let's go straight to the point:

Both are interfaces provided by Spring Data, and both help us perform basic operations like save(), findById(), delete(), etc.

So, if CrudRepository already gives us all these basic CRUD operations, why would we need JpaRepository?

The answer is: JpaRepository extends CrudRepository and adds more JPA-specific functionalities.

## Here's what you get extra with JpaRepository:

- Methods like findAll(Sort sort) and findAll(Pageable pageable), super useful when dealing with pagination and sorting.
- Batch operations such as saveAll() or deleteAllInBatch().
- Integration with JPA features, like flushing the persistence context (flush()) or deleting entities in batches, which can significantly improve performance.

## The main idea:

- CrudRepository → Basic CRUD operations.
- JpaRepository → Everything from CrudRepository + JPA goodies (pagination, sorting, batch operations, flush, etc).

If you're using Spring Data JPA, the default and most common choice is JpaRepository, because it's a superset of the other two main repositories (CrudRepository and PagingAndSortingRepository).

When we use JpaRepository, it's not just about saving or finding data, it gives us extra control and performance with JPA. Let me know how you've used these extra features in your projects!
    `,
  },
  '9': {
    id: '9',
    title: 'Can we escape from digital era?',
    excerpt:
      'Your food now comes from a click in an app from your pocket. Going to a party? You call a car with that same click. Everything is changing, and the way we deal with money is also changing. DREX is coming.',
    date: '2025-10-22',
    author: 'Marina',
    tags: ['Blockchain', 'Crypto', 'Technology'],
    readTime: '6 min',
    content: `
# Can we escape from digital era?

![Can we escape from digital era?](/digital-era.jpg)

Your food now comes from a click in an app from your pocket.

Going to a party? You call a car with that same click.

Checking how healthy you are? A smart scale tracks body mass, and a ring monitors your sleep.

Everything is changing, and it's not news anymore!

So, do you really think your money wouldn't change too?

The way we are dealing with money is also changing. PIX already showed us that. But the real revolution goes deeper. DREX is coming.

Thinking about all this, I decided to dive deeper into the topic and took two courses that I highly recommend:

1 - Crypto with Paradigma Education: every piece of information you need to understand about cryptocurrency can be found with these guys!

2 – Blockchain e Solidity at Alura: this course is concise and answers all the technical questions I had. The instructor explained in a simple way how the blockchain works, how to create a token and how the wallets are developed!!

Here are my (shy) notes from this course:
https://github.com/marina-msl/hello-world-blockchain
    `,
  },
  '10': {
    id: '10',
    title: 'The day that all my problem was a simple comma',
    excerpt:
      'What is the router in Vue? The Vue Router is the navigation mechanism between screens in your single-page application. After switching from MLA to SPA, I discovered the issue: a missing comma in the header between Content-Type and Authorization.',
    date: '2025-10-27',
    author: 'Marina',
    tags: ['Vue', 'Frontend', 'JavaScript'],
    readTime: '5 min',
    content: `
# The day that all my problem was a simple comma

## What is the router in Vue?

The Vue Router is the navigation mechanism between screens (views) in your single-page application (SPA).

It is responsible for:

1 - Managing routes (URLs) within the app
2 - Displaying the correct component according to the accessed address
3 - Allowing navigation without reloading the page

## How it works in practice?

Without the router, Vue only renders a single component — App.vue.

With the router, you define something like:

\`\`\`javascript
{ path: '/login', component: LoginView }
{ path: '/register', component: RegisterView }
\`\`\`

That means:

When the user goes to /login → Vue displays Login.vue

When the user goes to /register → Vue displays Register.vue

And Vue Router does all this without reloading the browser, simply swapping the component inside the <router-view>.

## So, what was my problem?

I switched my app from MLA to SPA, and suddenly the page stopped rendering.

After full a investigation, checking all route file, main file, etc, I finally figured out the issue, I imported a file with a tiny mistake.

In StockService.js, there was missing a comma in the header between Content-Type and Authorization.
    `,
  },
  '11': {
    id: '11',
    title: 'Refactoring: Quick wins or long-term gains?',
    excerpt:
      'I decided to centralize all data fetching in StockService.js. Here are the advantages: separation of concerns, scalability, testability, and cleaner components. Future-you will be thankful for this decision!',
    date: '2025-11-02',
    author: 'Marina',
    tags: ['Vue', 'Refactoring', 'Best Practices'],
    readTime: '5 min',
    content: `
# Refactoring: Quick wins or long-term gains?

I was watching a Vue.js course, and the course's lesson explained how to create a file as a Service. The example in the course was: two Vue.js components, both of which were using the same API and getting data. Instead of applying and implementing duplicate code in both files, the instructor created a new Service file and centralized the data-fetching logic.

In my project, I hadn't structured it that way yet, but I still had some data-fetching code spread throughout the code. So, I decided to do the same and centralize all data fetching in StockService.js.

## Here are the advantages of doing it:

1 - Separation of concerns/ Reusability: once you centralize the code that shares the same responsibility, it's great for maintainability! Nothing is worse for a developer than duplicate code because then you must look through all the places you have to change. Future-you will be thankful for this decision!

2 - Scalability: the truth is, my project is still a small project, just two components, only two or three data fetches. Imagine when the app starts to grow. Centralizing will prevent chaos! Imagine 25 components all talking to the backend in different ways: a nightmare!

3 - Testability: isolated functions provide a much easier way to implement unit tests.

4 - Cleaner and smaller components: the component files will be easier to read, more concise and smaller. Your colleagues will understand your code more easily and faster!
    `,
  },
  '12': {
    id: '12',
    title: 'When Code Feels Beautiful: Hexagonal vs DDD',
    excerpt:
      'A few days ago, I came across a piece of code that genuinely made me stop and smile. Was I looking at Hexagonal Architecture or Domain-Driven Design (DDD)? They often look similar at first glance.',
    date: '2025-11-12',
    author: 'Marina',
    tags: ['Architecture', 'DDD', 'Design Patterns'],
    readTime: '6 min',
    content: `
# When Code Feels Beautiful: Hexagonal vs DDD

A few days ago, I came across a piece of code that genuinely made me stop and smile.

You know that feeling, when everything is clean and each layer seems to "talk" to the other with perfect balance?

Every developer knows what it's like to find beautiful code.

This one was a perfect example of Hexagonal Architecture, so well divided between application, domain, and infrastructure layers that it almost felt elegant.

But then, for a moment, I hesitated.

Was I looking at Hexagonal Architecture or Domain-Driven Design (DDD)?

They often look similar at first glance, and I found myself thinking about how to actually tell them apart.

## Hexagonal Architecture

- It defines boundaries clearly.
- Your business logic doesn't depend on infrastructure.
- External systems interact through "ports" (interfaces) and "adapters" (implementations).

## Domain-Driven Design (DDD)

- It's about understanding and modeling the business domain deeply.
- It can be implemented within a Hexagonal Architecture.
- The goal is not just clean code, but code that reflects business meaning.

Maybe that's what makes code beautiful, when structure and purpose align perfectly.
    `,
  },
  '13': {
    id: '13',
    title: 'Synchronous vs Reactive: Is Your Server Working or Just Waiting in the Kitchen?',
    excerpt:
      'Two applications can return the exact same result: 200 (OK) or 404 (Not Found), and still behave completely differently under the hood. The difference lies in what happens inside the server.',
    date: '2025-11-24',
    author: 'Marina',
    tags: ['Spring', 'Reactive', 'Performance'],
    readTime: '7 min',
    content: `
# Synchronous vs Reactive: Is Your Server Working or Just Waiting in the Kitchen?

Two applications can return the exact same result: 200 (OK) or 404 (Not Found), and still behave completely differently under the hood. The difference lies in what happens inside the server.

The client doesn't notice the difference. But your server definitely does.

## Synchronous Mode: The Waiter Who Gets Stuck in the Kitchen

In a synchronous API (traditional MVC):

1 - A request arrives.
2 - The server assigns a thread: a "waiter."
3 - This waiter goes to the kitchen (database, external API, etc.).
4 - And… waits.
5 - And waits.
6 - And waits.

Only after the dish is ready does the thread return to the customer.

Until then, it's just standing still, blocked, unavailable for other requests.

In high-concurrency environments, this leads to exhausted thread pools very quickly.

## Reactive Mode: The Waiter Who Doesn't Waste Time

With a reactive pipeline (Mono, Flux, WebFlux):

1 - The request arrives.
2 - The server assigns a thread.
3 - The thread places the order in the kitchen…
4 - And immediately goes back to serve another table.

No waiting. No blocking. When the kitchen finishes the dish, any free thread is used to hand it to the client.

👉 The response to the client is the same.

The efficiency inside the server is completely different.

That's why reactive systems shine when:

- you expect high traffic
- your API relies on slow external services
- threads are a precious resource
- latency is unpredictable

Both approaches return the same status code, but the way the server gets there is completely different.
    `,
  },
  '14': {
    id: '14',
    title: 'How HashMap Resolves Collisions And Its Limitations?',
    excerpt:
      'If you\'ve ever used a HashMap in Java, you\'ve already relied on one of the most important data structures. But have you ever wondered what happens when two keys generate the same hash?',
    date: '2025-12-15',
    author: 'Marina',
    tags: ['Java', 'Collections', 'Data Structures'],
    readTime: '6 min',
    content: `
# How HashMap Resolves Collisions And Its Limitations?

If you've ever used a HashMap in Java, you've already relied on one of the most important data structures in the language. But have you ever wondered what happens when two keys generate the same hash? That's where collision resolution comes in.

## How HashMap Resolves Collisions

Java's HashMap uses a strategy called separate chaining:

Each key is converted into a hash.

That hash determines the bucket where the entry will be stored.

If two keys map to the same bucket, Java stores them in a linked list.

Starting from Java 8, if a bucket contains many entries, the linked list is converted into a Red-Black Tree, improving performance from O(n) to O(log n).

This hybrid approach makes HashMap both fast and robust.

## Limitations of This Approach

Although powerful, the design has some constraints:

- Hash collisions still cost performance: Even with trees, accessing entries in a heavily-collided bucket is slower than accessing unique buckets.
- Poor hashCode() implementations break performance: If many objects generate the same hash, the map becomes unbalanced and lookups slow down.
- Treeification only happens after thresholds:
  - bucket size ≥ 8
  - table capacity ≥ 64
Before that, it stays as a linked list.
- Higher memory usage: Tree nodes are more complex and heavier than list nodes.

## Why Collisions Aren't a Big Problem?

Collisions sound bad, but in HashMap they're expected and handled efficiently:

1 - HashMap is designed to deal with collisions using lists and trees.
2 - Average lookup time stays O(1) in real-world scenarios.
3 - Resizing and a good hashCode() keep collisions low.
4 - Treeification prevents worst-case slowdowns.
5 - In practice, collisions only matter when the hashing is really poor.

👉 To sum up

HashMap handles collisions using linked lists and Red-Black Trees, but it's not magic. A bad hashCode() method or too many collisions can still degrade performance.
    `,
  },
  '15': {
    id: '15',
    title: 'Auto-Encapsulation in Java: Useful or Exaggerated?',
    excerpt:
      'Auto-encapsulating fields with getters inside the same class can be useful when the logic may evolve, but for simple values it often adds more ceremony than value.',
    date: '2025-12-10',
    author: 'Marina',
    tags: ['Java', 'OOP', 'Refactoring'],
    readTime: '5 min',
    content: `
# Auto-Encapsulation in Java: Useful or Exaggerated?

One common habit in Java is to always use getters and setters, even inside the class itself. But as Martin Fowler highlights in Refactoring, auto-encapsulating fields only makes sense when it actually adds value.

Sometimes it does. Sometimes it's just ceremony.

## When Auto-Encapsulation Is Overkill

\`\`\`java
class Stock {
   private double lastPrice;
   public Stock(double lastPrice) {
       this.lastPrice = lastPrice;
   }
   // Using getLastPrice() here adds nothing
   public double applyDiscount(double pct) {
       return lastPrice - (lastPrice * pct);
   }
}
\`\`\`

\`lastPrice\` is a plain value. Calling \`getLastPrice()\` internally wouldn't improve clarity or flexibility, it would only add noise.

## When Auto-Encapsulation Makes Sense

\`\`\`java
class StockHolding {
   private int quantity;
   private double pricePerShare;
   public double getTotalValue() {
       // This may evolve into a more complex rule
       return quantity * pricePerShare;
   }

   public void printValue() {
       System.out.println("Holding value: " + getTotalValue());
   }
}
\`\`\`

Here, accessing the field through a getter is useful because the logic may grow: fees, adjustments, rounding rules, etc.

Centralizing the calculation in one method makes the class easier to maintain, exactly the kind of future-proofing Fowler describes.

## To sum up

- Use direct field access when the value is simple and unlikely to change.  
- Use auto-encapsulation when the field may evolve into a calculation, validation, or rule.  

Encapsulation isn't about following a rule, it's about writing code that stays clean as it grows.
    `,
  },
  '16': {
    id: '16',
    title: 'JWT is not authentication and understanding this changes everything!',
    excerpt:
      'JWT is often described as an authentication mechanism, but it is actually a token you get after authentication. Understanding that difference helps avoid common security pitfalls.',
    date: '2025-11-16',
    author: 'Marina',
    tags: ['Security', 'JWT', 'Authentication'],
    readTime: '6 min',
    content: `
# JWT is not authentication and understanding this changes everything!

We often say things like "I use JWT for authentication." I've said it myself, because that’s how most of the industry talks. But technically, that's not what’s happening.

Authentication is the process of verifying who you are. JWT is just the token you receive after that process, a portable identity that services can validate.

## Where the confusion starts

The issue is that many systems treat the token itself as if it were authentication, and that leads to common security pitfalls:

- A token can remain valid even after a user loses access.  
- Revocation is difficult and often overlooked.  
- Once issued, a token can't simply be "taken back."  
- Teams sometimes store sensitive data inside the readable payload.  
- JWT frequently gets confused with session management.  

JWT works beautifully for propagating identity and authorization across distributed systems, but it doesn't replace the authentication step.

## Why this matters

When we understand these nuances, we make better technical decisions and build systems that are easier to maintain and much safer to scale.
    `,
  },
  '17': {
    id: '17',
    title: 'This is a Tree or a Graph?',
    excerpt:
      'Every tree is a graph, but not every graph is a tree. Understanding the difference helps you decide whether your structure is hierarchical or relational.',
    date: '2025-11-10',
    author: 'Marina',
    tags: ['Algorithms', 'Data Structures', 'Graphs'],
    readTime: '5 min',
    content: `
# This is a Tree or a Graph?

Another day I was taking an AI course, and the algorithm for a search problem example didn’t look like the typical "network-style" graph. It looked much more like a tree, and that’s a great moment to ask a classic interview question:

"Is this a tree, or is this a graph?"

It matters because every tree is a graph, but not every graph is a tree.

## Tree

A tree is a specialized graph, with:

- one root  
- no cycles  
- one unique path between nodes  
- a clear hierarchy  
- leaves: nodes with no children, the endpoints of a tree  

Common uses: decision trees, file systems, org charts, binary search trees.

## Graph

A graph is more flexible:

- may have cycles  
- multiple paths  
- no root required  
- models general relationships  

Common uses: social networks, transportation networks, knowledge graphs, recommendation systems.

## Rule of thumb

In interviews and real-world systems, the rule of thumb is simple:

- If it’s hierarchical → tree.  
- If it’s relational → graph.  

When in doubt, remember: a tree is a graph with rules.
    `,
  },
  '18': {
    id: '18',
    title: 'Java Records: A Sophisticated Way to Build DTOs',
    excerpt:
      'Java records provide an elegant, immutable way to model DTOs with almost no boilerplate, giving you constructors, accessors, equals, hashCode, and toString out of the box.',
    date: '2025-10-31',
    author: 'Marina',
    tags: ['Java', 'Records', 'DTO'],
    readTime: '5 min',
    content: `
# Java Records: A Sophisticated Way to Build DTOs

![Java Records for DTOs](/java-record.jpg)

When Java introduced records, I immediately thought: "Finally, a cleaner way to write DTOs!"

A record is a special kind of class designed to hold immutable data, no boilerplate, no setters, just the essentials.

With a single line, Java automatically gives you a constructor, getters, and even equals, hashCode, and toString.

Because records are immutable, you can't modify their fields, no setters allowed.

And that's a good thing: immutability makes data safer and easier to reason about, especially in concurrent systems.

For me, records are the most elegant way to express DTOs in Java (introduced in version 14 and made permanent in 16), concise, expressive, and intentional.
    `,
  },
  '19': {
    id: '19',
    title: '🧠 From Java Collections to Interview Readiness',
    excerpt:
      'Reading my last posts casually takes around 20–25 minutes. But reading them as a developer trying to understand why each collection exists and how it maps to real systems takes much longer and that\'s where learning actually happens.',
    date: '2026-01-12',
    author: 'Marina',
    tags: ['Java', 'Collections', 'Interview'],
    readTime: '6 min',
    content: `
# 🧠 From Java Collections to Interview Readiness

Reading my last posts casually takes around 20–25 minutes.

But reading them as a developer trying to understand why each collection exists and how it maps to real systems takes much longer and that's where learning actually happens.

At this point, you're no longer just reading about List, Set, and Map.

You're training the kind of reasoning expected in technical interviews.

## ✅ Questions you should answer after reading the posts

1 - What real-world problem does each collection model: List, Set, and Map?

2 - Why is Set the right choice when uniqueness is a business rule, not just a technical detail?

3 - How do HashSet, LinkedHashSet, and TreeSet differ conceptually in terms of ordering?

4 - Why can choosing the wrong collection lead to bugs even when the code compiles?

## 🔍 Questions to explore next (require deeper study)

5 - How does HashSet enforce uniqueness internally when add() is called?

6 - Why is LinkedHashSet slower than HashSet, and what trade-off does it introduce?

7 - What happens when you insert a duplicate key into a Map? How is this different from inserting a duplicate element into a Set?

8 - Imagine a system that must:
- prevent duplicate transaction processing
- preserve the order of audit events
- evaluate limits in sorted order

Which collections would you choose, and why?

If you can answer the first four, you understood the core ideas. If you can answer most of these questions clearly, you're already thinking beyond syntax and into system modeling.

💬 Pick one question and answer it in the comments.

🔖 Save this post to revisit before your next interview.
    `,
  },
  '20': {
    id: '20',
    title: 'How does HashSet work internally, and how does it ensure unique elements?',
    excerpt:
      'HashSet looks simple on the surface, but internally it relies on HashMap and the hashCode/equals contract to guarantee uniqueness efficiently.',
    date: '2026-01-14',
    author: 'Marina',
    tags: ['Java', 'Collections', 'HashSet'],
    readTime: '6 min',
    content: `
# How does HashSet work internally, and how does it ensure unique elements?

At first glance, HashSet feels simple. You add elements, and duplicates are silently ignored. But under the hood, there is a very intentional design that explains both its performance and its behavior.

HashSet does not store elements directly. Internally, it is backed by a HashMap. Every element you add to a HashSet becomes a key in that map, paired with a constant dummy value. This means all the rules that apply to HashMap keys also apply to HashSet elements.

When you call add, two things happen. First, Java computes the hashCode of the element. This hash is used to decide which bucket the element belongs to. Then, Java checks equality using equals to determine whether an element with the same identity already exists in that bucket.

This combination is what guarantees uniqueness. If two objects have the same hashCode and equals returns true, HashSet considers them duplicates and ignores the new insertion. If either the hashCode is different or equals returns false, the element is treated as unique.

This design explains a few important behaviors. HashSet does not preserve insertion order because hashing is about distribution, not sequence. It also explains why overriding hashCode and equals correctly is critical. A broken implementation can lead to duplicated data or elements that cannot be found later.

In real systems, this matters more than it seems. Think about processed transaction IDs, unique user identifiers, or idempotency keys in financial services. HashSet offers a fast and reliable way to enforce uniqueness, but only if the objects stored respect the hashCode and equals contract.

HashSet looks simple on the surface, but its power comes from well defined rules. Understanding those rules is what turns a convenient collection into a reliable tool at scale.
    `,
  },
  '21': {
    id: '21',
    title: 'Your First Hello World with Spring AI Will Be Easier Than You Think!',
    excerpt:
      'In just 10 minutes, you can already have your LLM responding! Exploring Spring AI, nothing surprised me more than how easy it was to create my first Hello World.',
    date: '2026-01-17',
    author: 'Marina',
    tags: ['Spring', 'Spring AI', 'Java'],
    readTime: '5 min',
    content: `
# Your First Hello World with Spring AI Will Be Easier Than You Think!

![Spring AI with Ollama](/springai-ollama.jpg)

Wanna bet? In just 10 minutes, you can already have your LLM responding!

Exploring Spring AI, nothing surprised me more than how easy it was to create my first Hello World. Of course, there are many cool things you can do with Spring AI, but nothing is more memorable than our first Hello World, right?

## Step 1:

Go to [Spring Initializr](https://start.spring.io/) and choose the Spring AI (Ollama) and Web dependencies. I chose Ollama because it's free, just download the model and you're ready to go.

After generating the project, open it in your favorite IDE and let's create the Controller.

## Step 2:

To follow a clean architecture that should already feel natural, don't put code directly in the Application class. Instead, create a Controller package and add a HelloWorldController class.

![HelloWorldController class](/spring-ai-controller.jpg)

\`\`\`java
@RestController
@RequestMapping("/assistant")
public class HelloWorldController {

    private final ChatClient chatClient;

    public HelloWorldController(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @GetMapping
    public String ask(@RequestParam String question) {
        return chatClient.call(question);
    }
}
\`\`\`

## Step 3:

Run the application and access:

\`http://localhost:8080/assistant?question=Hello\`

Done! That's your first interaction with your LLM via Spring AI!

This is just the beginning of what it can do. Can you imagine all the cool projects we could build with this tool?

## Summary:

- In the ask method, \`.content()\` returns a String, perfect for simple chatbots.

- It's the foundation for building more complex assistants, adding memory, data, or even integrating with external APIs.

- You can change the model in \`.model("ollama")\` to any other model you have access to.

- A small tutorial like this opens up many possibilities: testing different models and seeing how the responses differ, analyzing response performance, and much more.
    `,
  },
}

export default function BlogPostDetail({ slug }: { slug: string }) {
  const post = blogPostsData[slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
          <Link
            href="/blog"
            className="text-primary-400 hover:text-primary-300"
          >
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime} read</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div
              className="prose prose-invert max-w-none text-gray-300"
              dangerouslySetInnerHTML={{
                __html: (() => {
                  const lines = post.content.split('\n')
                  const result: string[] = []
                  let inCodeBlock = false
                  let codeBlockContent: string[] = []
                  let codeLanguage = ''

                  for (let i = 0; i < lines.length; i++) {
                    const line = lines[i]

                    // Handle code block start/end
                    if (line.startsWith('```')) {
                      if (inCodeBlock) {
                        // End of code block
                        const code = codeBlockContent.join('\n')
                        result.push(
                          `<pre class="bg-gray-900 rounded-lg p-4 overflow-x-auto my-4 border border-gray-700"><code class="text-sm text-gray-200">${code
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')}</code></pre>`
                        )
                        codeBlockContent = []
                        inCodeBlock = false
                        codeLanguage = ''
                      } else {
                        // Start of code block
                        inCodeBlock = true
                        codeLanguage = line.slice(3).trim() || ''
                      }
                      continue
                    }

                    if (inCodeBlock) {
                      codeBlockContent.push(line)
                      continue
                    }

                    // Handle headers
                    if (line.startsWith('# ')) {
                      result.push(
                        `<h1 class="text-3xl font-bold text-white mb-3 mt-6">${line.slice(2)}</h1>`
                      )
                      continue
                    }
                    if (line.startsWith('## ')) {
                      result.push(
                        `<h2 class="text-2xl font-bold text-white mb-2 mt-4">${line.slice(3)}</h2>`
                      )
                      continue
                    }
                    if (line.startsWith('### ')) {
                      result.push(
                        `<h3 class="text-xl font-bold text-white mb-1 mt-3">${line.slice(4)}</h3>`
                      )
                      continue
                    }

                    // Handle images
                    if (line.startsWith('![')) {
                      const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)/)
                      if (match) {
                        const alt = match[1] || ''
                        const src = match[2]
                        result.push(
                          `<div class="my-5"><img src="${src}" alt="${alt}" class="w-full rounded-lg shadow-lg" /></div>`
                        )
                      }
                      continue
                    }

                    // Handle markdown links [text](url) - convert to HTML
                    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
                    let processedLine = line.replace(linkRegex, (match, text, url) => {
                      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 underline">${text}</a>`
                    })

                    // Handle list items
                    if (processedLine.startsWith('- ')) {
                      // Process links in list items too
                      const listContent = processedLine.slice(2)
                      result.push(
                        `<li class="ml-4 mb-1">${listContent}</li>`
                      )
                      continue
                    }

                    // Handle empty lines
                    if (processedLine.trim() === '') {
                      continue
                    }

                    // Regular paragraph (with processed links)
                    result.push(`<p class="mb-2 leading-snug">${processedLine}</p>`)
                  }

                  // Handle unclosed code block
                  if (inCodeBlock && codeBlockContent.length > 0) {
                    const code = codeBlockContent.join('\n')
                    result.push(
                      `<pre class="bg-gray-900 rounded-lg p-4 overflow-x-auto my-4 border border-gray-700"><code class="text-sm text-gray-200">${code
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')}</code></pre>`
                    )
                  }

                  return result.join('')
                })(),
              }}
            />

            {/* Likes Section */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <BlogLikes postId={post.id} />
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}

