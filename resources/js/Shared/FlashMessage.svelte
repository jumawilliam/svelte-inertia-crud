<script>
 import {page} from '@inertiajs/svelte'
</script>

{#if $page.props.flash.success}
 <div class="alert alert-success">{$page.props.flash.success}</div>
 {:else if $page.props.flash.info}
 <div class="alert alert-info">{$page.props.flash.info}</div>
{:else if $page.props.flash.warning}
<div class="alert alert-warning">{$page.props.flash.warning}</div>
{/if}


