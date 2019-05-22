### **Description**

Used when a lot of information should be displayed in a small amount of space.
Information is displayed in tabs by grouping it in several categories, each category becoming a tab head.

<br />
<br />

#### **Default Tabs**

By default, tabs are horizontal and left aligned:

```jsx
<Tabs>
  <Tabs.Tab eventKey="home" title="Home">
    My heavy fox, you inspire me to write. How I love the way you skip, sleep
    and sneer, Invading my mind day and through the night, Always dreaming about
    the cunning smear.
    <br />
    <Tabs>
      <Tabs.Tab eventKey="home" title="Home">
        My heavy fox, you inspire me to write. How I love the way you skip,
        sleep and sneer, Invading my mind day and through the night, Always
        dreaming about the cunning smear.
      </Tabs.Tab>
      <Tabs.Tab eventKey="profile" title="Profile">
        Let me compare you to an ideal spoon? You are more deadpan, stunning and
        scaly. Fun sun heats the surreal peaches of June, And summertime has the
        vernal qualey.
      </Tabs.Tab>
      <Tabs.Tab eventKey="contact" title="Contact" disabled>
        How do I love you? Let me count the ways. I love your clad ankle, elbows
        and smile. Thinking of your glad elbows fills my days. My love for you
        is the bally air mile.
      </Tabs.Tab>
    </Tabs>
  </Tabs.Tab>
  <Tabs.Tab eventKey="profile" title="Profile">
    Let me compare you to an ideal spoon? You are more deadpan, stunning and
    scaly. Fun sun heats the surreal peaches of June, And summertime has the
    vernal qualey.
  </Tabs.Tab>
  <Tabs.Tab eventKey="contact" title="Contact" disabled>
    How do I love you? Let me count the ways. I love your clad ankle, elbows and
    smile. Thinking of your glad elbows fills my days. My love for you is the
    bally air mile.
  </Tabs.Tab>
</Tabs>
```

#### **Right aligned**

```jsx
<Tabs align="end">
  <Tabs.Tab eventKey="home" title="Home">
    My heavy fox, you inspire me to write. How I love the way you skip, sleep
    and sneer, Invading my mind day and through the night, Always dreaming about
    the cunning smear.
  </Tabs.Tab>
  <Tabs.Tab eventKey="profile" title="Profile">
    Let me compare you to an ideal spoon? You are more deadpan, stunning and
    scaly. Fun sun heats the surreal peaches of June, And summertime has the
    vernal qualey.
  </Tabs.Tab>
  <Tabs.Tab eventKey="contact" title="Contact" disabled>
    How do I love you? Let me count the ways. I love your clad ankle, elbows and
    smile. Thinking of your glad elbows fills my days. My love for you is the
    bally air mile.
  </Tabs.Tab>
</Tabs>
```

#### **Vertical Tabs**

```jsx
<Tabs layout="vertical">
  <Tabs.Tab eventKey="home" title="Home">
    My heavy fox, you inspire me to write. How I love the way you skip, sleep
    and sneer, Invading my mind day and through the night, Always dreaming about
    the cunning smear.
  </Tabs.Tab>
  <Tabs.Tab eventKey="profile" title="Profile">
    Let me compare you to an ideal spoon? You are more deadpan, stunning and
    scaly. Fun sun heats the surreal peaches of June, And summertime has the
    vernal qualey.
  </Tabs.Tab>
  <Tabs.Tab eventKey="contact" title="Contact" disabled>
    How do I love you? Let me count the ways. I love your clad ankle, elbows and
    smile. Thinking of your glad elbows fills my days. My love for you is the
    bally air mile.
  </Tabs.Tab>
</Tabs>
```

#### **Extra content**

You can render any additional content inline with the Tab Navigation. Your content will be rendered inside a flex container, that fills the entire empty space in the Navigation.

```jsx
import Button from "../Button/Button";

<Tabs
  extra={
    <>
      <strong style={{ flex: 1 }}>Extra title</strong>
      <Button variant="link">Extra link</Button>
    </>
  }
  align="end"
>
  <Tabs.Tab eventKey="home" title="Home">
    My heavy fox, you inspire me to write. How I love the way you skip, sleep
    and sneer, Invading my mind day and through the night, Always dreaming about
    the cunning smear.
  </Tabs.Tab>
  <Tabs.Tab eventKey="profile" title="Profile">
    Let me compare you to an ideal spoon? You are more deadpan, stunning and
    scaly. Fun sun heats the surreal peaches of June, And summertime has the
    vernal qualey.
  </Tabs.Tab>
</Tabs>;
```
