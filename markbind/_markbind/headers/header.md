<header>
  <navbar type="dark">
    <a slot="brand" href="{{baseUrl}}/index.html" title="Home" class="navbar-brand">CP3106 Blog</a>
    <dropdown header="Journal" class="nav-link">
      <li><a href="{{baseUrl}}/contents/week1.html" class="dropdown-item">Week 1</a></li>
    </dropdown>
    <li><a href="{{baseUrl}}/contents/about.html" class="nav-link">About</a></li>
    <dropdown header="Others" class="nav-link">
      <li><a href="{{baseUrl}}/contents/mbCheatsheet.html" class="dropdown-item">MarkBind Cheatsheet</a></li>
    </dropdown>
    <li slot="right">
      <form class="navbar-form">
        <searchbar :data="searchData" placeholder="Search" :on-hit="searchCallback" menu-align-right></searchbar>
      </form>
    </li>
  </navbar>
</header>
