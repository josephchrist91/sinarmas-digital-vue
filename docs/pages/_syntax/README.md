
# This is guide pages

## Alert Options
::: tip >Put your title here
This is tip (green)
:::

::: warning >Put your title here
This is a warning (yellow)
:::

::: details  
Test detail
:::

::: danger >Put your title here
This is a dangerous warning (red)
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::


## Download & Links <Badge text="this is default badge"/>

For example, you can view
the Markdown source for the article text on this page here:
<http://daringfireball.net/projects/markdown/index.text>

[Markdown 1.0.1][dl] (18 KB) -- 17 Dec 2004

[dl]: http://daringfireball.net/projects/downloads/Markdown_1.0.1.zip

![SMD Image](../../assets/smlogo.png)

[Download excel](https://github.com/josephchrist91/sinarmas-digital-vue/raw/master/docs/assets/kpi.xlsx)

[Download HLD](https://github.com/josephchrist91/sinarmas-digital-vue/raw/master/docs/assets/HLD_Hierarchy_SmartFren_6D_Review_v1.0.docx)

[foo heading](./#movable-type) <!-- Anchors user to a heading in the foo README file -->


## Table

|Header         |Desc |Test long text|Test another long text|
|----           |:----:|----:|----|
|Default align left  |This column align center|This column align right|This is default|
|Firstcolumn|Secondcolumn|Thridcolumn|FourthColumn|



## Code / word block

You need to use a special `MTMarkdownOptions` container tag in each
Movable Type template where you want HTML 4-style output:

    <MTMarkdownOptions output='html4'>
        ... put your entry content here ...
    </MTMarkdownOptions>

The easiest way to use MTMarkdownOptions is probably to put the
opening tag right after your `<body>` tag, and the closing tag right
before `</body>`.

To suppress Markdown processing in a particular template, i.e. to
publish the raw Markdown-formatted text without translation into
(X)HTML, set the `output` attribute to 'raw':

    <MTMarkdownOptions output='raw'>
        ... put your entry content here ...
    </MTMarkdownOptions>

Put language to get highlighted syntax :
```js
document.write('hello, world.)
```

```markdown
  ### hello, world.
```

### Line highlight in code blocks <Badge text="this is warning badge" type="warning"/>
```js{4,3}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```/
#### Using Vue in Markdown
{{ 4 + 5 * 9 }}
<MyComponent :start="5"></MyComponent>
```
End of code blocks

## Emoticon 
[Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

:tada: :100:
😄	:smile:
😦	:frowning:
⭐️	:star:
❤️	:heart:
👍	:thumbsup:
👎	:thumbsdown:
👌	:ok_hand:
✋	:hand:
❗️	:exclamation:
❓	:question:
💬	:speech_balloon:
💭	:thought_balloon:
☀️	:sunny:
☁️	:cloud:
☔️	:umbrella:
🌍	:earth_africa:
🔉	:sound:
🔈	:speaker:
🔇	:mute:
🔔	:bell:
🔕	:no_bell:
💻	:computer:
🔒	:lock:
🔓	:unlock:
🏠	:house:
🏢	:office:
🏥	:hospital:
🚀	:rocket:
◀️	:arrow_backward:
▶️	:arrow_forward:

## Table of Content
[[toc]]