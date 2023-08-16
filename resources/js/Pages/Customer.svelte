<script>
   import {inertia, router} from '@inertiajs/svelte'
    import Layout from '@/Shared/Layout.svelte'
    import Pagination from '@/Shared/Pagination.svelte'
    let pagetitle='Customers'
    export let customers;

    function deleteCustomer(id){
      if(confirm("You are about to delete a customer, are you sure?")){
         router.delete("/customers/"+id)
      }
    }
</script>
<svelte:head>
    <title>{pagetitle}</title>
</svelte:head>
<Layout>
    <a use:inertia href="/customers/create" class="btn btn-primary btn-sm" >Create Customer</a>
    <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {#each customers.data as customer,i}
          <tr>
            <th scope="row">{i+1}</th>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>
                <a use:inertia  href="/customers/{customer.id}"  class="btn btn-info btn-sm">View</a>
                <a use:inertia href="/customers/{customer.id}/edit" class="btn btn-primary btn-sm">Edit</a>
                <button on:click={()=>deleteCustomer(customer.id)} class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          {/each}
        </tbody>
      </table>
      <Pagination links={customers.links}/>
</Layout>