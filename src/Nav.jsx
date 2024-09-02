export default function Nav(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
             
            </ul>
            <form class="d-flex gap-3" role="search">
            <button class="btn btn-outline-success " type="submit">Log In</button>
              <button class="btn btn-outline-success" type="submit">Register</button>
            </form>
          </div>
        </div>
      </nav>
    )
    
}
    