<script>
    import Layout from '@/Shared/Layout.svelte'
    import { inertia } from '@inertiajs/svelte';
    export let customer
</script>

<Layout>
    <div class="card col-6 offset-3">
        <div class="card-header">
            Customer details
        </div>
        <div class="card-body">
            <p>Name: {customer.name}</p>
            <p>Name: {customer.email}</p>
            <p>Name: {customer.phone}</p>
            <a use:inertia href="/customers" class="btn btn-primary">Back</a>
        </div>
    </div>
</Layout>

