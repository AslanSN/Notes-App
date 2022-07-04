# LogiTravel - PrimeIT technical proof
### By AslanSN

## How to run it

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Presentation

For this app I used **HTML**, **CSS**, **SCSS**, **styled-components** and **JavaScript** with **React**, **Redux**, **Redux-Toolkit** and **Redux-Undo**.

I had to mimic this app: [Technical Proof](https://xd.adobe.com/view/ea696dd0-8781-4460-8720-36deb2d19b2a-bf3a/).

### The app shall have an UI that, at least, have:
 1. A container where text strings will be added or deleted.
 2. Una caja de entrada de texto, donde el usuario pueda escribir los textos que desee añadir a la lista.
 3. Un botón para agregar nuevas entradas.
 4. Un botón para eliminar de la lista.

### The application must:
- Add text entries, allow the user to type and add the text entry, to a listing. Empty entries cannot be added.
- Remove an item from the list (list items must be user selectable). List items cannot be deleted without having selected one or more of the items in the list. It is not required to be able to select multiple items in order to delete them at the same time, but this will be taken into account. It is desirable, but not required, that the user can delete items from the list by double clicking on the item.
list by double clicking on the item to be deleted.
- It is desirable, but not required, to allow the user to undo at least the last change made. This should be done by including an undo button.

## My timeline:
I had from 07-01 afternoon till 07-04 morning to do so, which I did.

I used the 2 first days to have the least of the UI to be able to see the printing info and so using `React`, `SCSS` and `Styled-components` whenever I saw it fitting. I had a vision of serialization and reusabity for all my components and even the variables. For so I deploied with `JS` a **`Tokens.js`** to have every color, every size and everything that I could use in conjoction with the `styled-components` to achieve the best reusability posible.

Then I moved forward to the "back" of the "front" using `redux`, `redux-toolkit` the best I could. Creating as Slices as I thought it would be precise. Comenting every reducer I should, and keeping the best I could the **SOLID** methodology.

Also, thanks to the `redux-undo` dependency I achieved to even add a `REDO` button!

So that's all,

Thank you very much for reading,

*AslanSN*
- - - - -
