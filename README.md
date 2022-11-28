# Development

### Link to Deployed Website

[https://curiousoctopus123.github.io/react/](https://curiousoctopus123.github.io/react/)

### Goal and Value of the Application

The goal of the application is to simulate the interface that Spotify and other music streaming applications provide for adding and removing songs to and from a listening queue. To illustrate this interface, I chose a selection of music from the positively terrible artist Yung Gravy.

The queue interface simulated by this application enhances the listening experience for the user of a music streaming application by empowering them to control the set of tracks that they will listen to next ahead of time.

### Usability Principles Considered

- **Hierarchy**: The page is broken up into two vertical sections: the header, and the page content. The page content is then broken up into two horizontal sections: the queue on the left, and the songs on the right. Within the songs section, the filters are nested together up top, and the actual list of songs is positioned below. Each item in the list is a vertically stacked row, with the primary properties of the song -- its album, name, and rating -- on the left -- while the secondary properties -- listens, duration, and release year -- are located to the right if the user wants more information.

- **Efficiency**: The list of songs is filtered and sorted accordingly within moments of the user changing the filters and sorting algorithm via the controls at the top of the songs section. Likewise, queue entries are added and removed within moments of a user clicking on a song or a queue entry, respectively. In short, the reactivity of the page makes it more efficient than the alternative of having to refresh every time a state change occurs.

- **Memorizability**: The song and queue entry components share a visual and interactive correspondence. In other words, not only do they look the same, but they both have a hover state that adds or removes an entry from the queue. This correspondence makes the application more memorizable because the user can know what to expect from a queue entry component by interacting with a song component, and vice versa.

### Organization of Components

This application has seven React components nested together as follows:

- App
  - Queue
    - Entry
  - Songs
    - Filters
      - Album
    - Song

You can clearly identify each of these components on the page.

### How Data is Passed Down Through Components

In general, all state is stored by components on a need-to-know basis.

- The **App** component stores the list of entries for the queue so that it can pass down functions to add and remove from the queue to the **Queue** and **Songs** components.

- The **Queue** component stores none of its own state because all of it is stored with the **App** component as described above. It passes down each entry included in the entries passed down to it by the **App** component to each **Entry** component.

- The **Songs** component stores the state for the two filters and one sorting dropdown so that it can apply them to the arrangement of the list of **Song** components.

- The **Songs**, **Song**, **Entry**, and **Album** components all draw directly on static data defined in the `data.json` file. This data is never represented as state because it never needs to be mutated.

### How the User Triggers State Changes

- The user triggers React state changes entirely through **clicks**.

  - To change how the list of songs is filtered and sorted, they click on corresponding parts of the filter and sorting interface positioned above.

  - To add or remove entries from the queue, they click on a song or entry, respectively.

- The user can also trigger visual changes to interactive components such as the album covers of the filters section by hovering over them. These changes are designed to indicate the fact that these components do something when clicked.



