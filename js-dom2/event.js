<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>JS-13 Create Node-Events</title>
  </head>
  <body class="container">
    <header id="header"><h1>DOM SELECTORS</h1></header>
    <main>
      <section class="add-item">
        <h2>ADD NEW ITEM</h2>
        <input id="input" type="text" name="languages" />
        <input id="btn" type="button" value="ADD" />
      </section>

      <section class="item-list">
        <h2>ITEM LIST</h2>
        <ul>
          <li class="list">HTML</li>
          <li class="list">CSS</li>
          <li class="list">Javascript</li>
          <li class="list">React</li>
          <li class="list">Django</li>
        </ul>
      </section>
    </main>

    <!-- <script src="createNode.js"></script> -->
    <script src="event.js"></script>
  </body>
</html>