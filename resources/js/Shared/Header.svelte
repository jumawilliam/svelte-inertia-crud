<script>
import {inertia} from '@inertiajs/svelte'
</script>

<main>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a use:inertia class="navbar-brand" href="/">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a use:inertia class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a use:inertia class="nav-link" href="/customers">Customers</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
</main>