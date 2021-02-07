1. Composing

### title

    <p class="h1">111</p>

### self-defined title

    <small class="text-muted">222</small>

### Explicit Title(Bigger)

    <h1 class="display-1">333</h1>

### Lead content

    <p class="lead">444</p>

### span

    <span class="mark">555</span>
    <span class="small">666</span>

### abbr

    <abbr title="xxxx" class="initialism">777</abbr>

### blockquote

    <blockquote class="blockquote text-right">
        <p>888</p>
        <footer class="blockquote-footer">
            999
            <cite title="Source Title">000</cite>
        </footer>
    </blockquote>

### list

    <ul class="list-unstyled">
        <li>111</li>
    </ul>

### multi rows or single row several columns

    <!-- multi rows without front circle -->
    <li class="list-inline">222</li>

    <!-- single row several columns -->
    <ul class="list-inline">
        <li class="list-inline-item">333</li>
        <li class="list-inline-item">444</li>
    </ul>

### dl dt dd

    <dl class="row">
        <dt class="col-sm-2">555</dt>
        <dd class="col-sm-10">666</dd>
        <dt class="col-sm-2 text-truncate">777</dt>
        <dd class="col-sm-10">
            <dl class="row">
                <dt class="col-md-2">888</dt>
                <dd class="col-md-10">999</dd>
            </dl>
        </dd>
    </dl>

2. Coding

### code block

    <code>000</code>
    <pre><code>111</code></pre>
    <var>y</var> = <var>m</var><var>x</var> + <var>b</var>

### user input(bg:black,font:white)

     <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>

### sample

    <samp>222</samp>

3. Picture

### Response image & mini image(thumbnail)

    <div class="row">
        <div class="col-lg-4">
            <img src="333.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-lg-4">
            <img src="444.jpg" alt="" class="w-100 img-fluid">
        </div>
        <div class="col-lg-4">
            <img src="555.jpg" alt="" class="img-fluid img-thumbnail">
        </div>
    </div>

### image align

    <!--left and right-->
    <div class="clearfix" style="border: 1px solid #F00;">
        <img src="666.jpg" alt="" class="rounded float-left">
        <img src="777.jpg" alt="" class="rounded float-right">
    </div>
    <!-- center -->
    <div style="border: 1px solid #F00;">
        <img src="888.jpg" alt="" class="rounded d-block mx-auto">
    </div>
    <div class="text-center" style="border: 1px solid #F00;">
        <img src="999.jpg" alt="" class="rounded">
    </div>

### picture

    <!-- different screen different pic-->
    <picture>
        <source srcset="000.jpg" media="(min-width: 992px)" >
        <source srcset="111.jpg" media="(min-width: 576px)">
        <img src="222.jpg" alt="">
    </picture>

### image + words

    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <figure class="figure">
                    <img src="333.jpg" class="figure-img img-fluid rounded"
                    alt="">
                    <figcaption class="figure-caption">444</figcaption>
                </figure>
            </div>
            <div class="col-lg-4">
                <figure class="figure">
                    <img src="555.jpg" class="figure-img img-fluid rounded"
                    alt="">
                    <figcaption class="figure-caption text-center">666</figcaption>
                </figure>
            </div>
            <div class="col-lg-4">
                <figure class="figure d-block">
                    <img src="777.jpg" class="figure-img w-100 img-fluid
                    rounded" alt="">
                    <figcaption class="figure-caption text-right">888</figcaption>
                </figure>
            </div>
        </div>
    </div>

4. Table

### table

    <table class="table table-stripped table-dark table-bordered table-hover table-sm">
        <caption>999</caption>
        <thead>
            <tr>
            <th>000</th>
            <th>111</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th>222</th>
            <td>333</td>
            </tr>
        </tbody>
    </table>

### Semantic stataliztion

    <table class="table table-bordered table-hover">
        <thead>
            <tr>
            <th>444</th>
            <th>555</th>
            </tr>
        </thead>
        666
        777
        <tbody>
            <tr class="table-active">
                <th>Active</th>
                <td>888</td>
                <td>999</td>
            </tr>
            <tr>
                <th>Default</th>
                <td>000</td>
                <td>111</td>
            </tr>
            <tr class="table-primary">
                <th>Primary</th>
                <td>222</td>
                <td>333</td>
            </tr>
            <tr>
                <th class="table-primary">Primary</th>
                <td class="table-primary">444</td>
                <td>555</td>
            </tr>
            <tr class="table-secondary">
                <th>Secondary</th>
                <td>666</td>
                <td>777</td>
            </tr>
            <tr class="table-success">
                <th>Success</th>
                <td>888</td>
            </tr>
            <tr class="table-danger">
                <th>Danger</th>
                <td>999</td>
            </tr>
            <tr class="table-warning">
                <th>Warning</th>
                <td>000</td>
            </tr>
            <tr class="table-info">
                <th>Info</th>
                <td>111</td>
            </tr>
            <tr class="table-light">
                <th>Light</th>
                <td>222</td>
            </tr>
            <tr class="table-dark">
                <th>Dark</th>
                <td>333</td>
            </tr>
        </tbody>
    </table>

    <!-- dark table -->
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th>444</th>
                <th>555</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-primary">
                <th>primary</th>
                <td>666</td>
            </tr>
            <tr>
                <th class="bg-primary">primary</th>
                <td class="bg-primary">777</td>
                <td>888</td>
            </tr>
            <tr class="bg-success">
                <th>success</th>
                <td>999</td>
            </tr>
            <tr class="bg-warning">
                <th>warning</th>
                <td>000</td>
            </tr>
            <tr class="bg-danger">
                <th>danger</th>
                <td>111</td>
            </tr>
            <tr class="bg-info">
                <th>info</th>
                <td>222</td>
            </tr>
        </tbody>
    </table>

### response table

    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                <th>333</th>
                <th>444</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>555</td>
                <td>666</td>
                </tr>
            </tbody>
        </table>
    </div>
