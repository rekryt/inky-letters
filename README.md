# Gulp & Sass+Inky & BrowserSync

How to install:

```bash
mkdir letters
cd letters

git clone https://github.com/Rekryt/inky-letters .
rm -rf .git #optional

npm install
```

How to use:

```bash
npm run dev
npm run build
```

Create html in folder "templates"

```html
<row>
  <columns large="6"></columns>
  <columns large="6"></columns>
</row>
```

And get complicated, but battle-tested, email-ready HTML like this:

```html
<table class="row">
  <tbody>
    <tr>
      <th class="small-12 large-6 columns first">
        <table>
          <tr>
            <th class="expander"></th>
          </tr>
        </table>
      </th>
      <th class="small-12 large-6 columns first">
        <table>
          <tr>
            <th class="expander"></th>
          </tr>
        </table>
      </th>
    </tr>
  </tbody>
</table>
```

After, casting styles to inline style strings, result placed in "dist" folder:
```html
<table style="...">
  <tbody>
    <tr style="...">
      <th style="...">
        <table style="...">
          <tbody>
            <tr style="...">
              <th style="..."></th>
            </tr>
          </tbody>
        </table>
      </th>
      <th style="...">
        <table style="...">
          <tbody>
            <tr style="...">
              <th style="..."></th>
            </tr>
          </tbody>
        </table>
      </th>
    </tr>
  </tbody>
</table>
```

How to install gulp:

```bash
npm install gulp-cli -g
```
