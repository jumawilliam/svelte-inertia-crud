<script>
    import Layout from '@/Shared/Layout.svelte'
    import {router, inertia} from '@inertiajs/svelte'

    export let errors
    export let customer

    function submit(id){
        router.put('/customers/'+id,customer)
    }
</script>

<Layout>
    <div class="card offset-3 col-6">
        <h5 class="card-header">Create new Customer</h5>
        <div class="card-body">
            <form on:submit|preventDefault={submit(customer.id)}>
                <div class="form-group">
                  <label ><strong>Name</strong></label>
                  <input bind:value={customer.name} type="text" class="form-control" id="exampleInputEmail1" >
                  {#if errors.name}
                    <div class="text-danger">{errors.name}</div>
                  {/if}
                </div>
                <div class="form-group">
                    <label ><strong>Email</strong></label>
                    <input bind:value={customer.email} type="email" class="form-control" id="exampleInputEmail1" >
                    {#if errors.email}
                    <div class="text-danger">{errors.email}</div>
                  {/if}
                </div>
                  <div class="form-group">
                    <label ><strong>Phone</strong></label>
                    <input bind:value={customer.phone} type="text" class="form-control" id="exampleInputEmail1" >
                    {#if errors.phone}
                    <div class="text-danger">{errors.phone}</div>
                  {/if}
                </div>
                <a use:inertia href="/customers" class="btn btn-secondary float-start">Back</a>
                <button type="submit" class="btn btn-primary float-end" >Submit</button>
            </form>
        </div>
      </div>
   
</Layout>