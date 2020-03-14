# Bootstrap4

## container

<div class="container">
	<!-- Content here -->
</div>

<div class="container-fluid">
	<!-- Content here -->
</div>

## Grid

### common

<div class="container">
	<div class="row">
		<div class="col-xl-3" style="background:red;">
			1-1
		</div>
		<div class="col-xl-3" style="background:green;">
			1-2
		</div>
	</div>
</div>

### same width

<div class="container">
	<div class="row">
		<div class="col-sm">1-1</div>
		<div class="col-sm">1-2</div>
	</div>
	<div class="row">
		<div class="col">2-1</div>
		<div class="col">2-2</div>
	</div>
</div>

### same width for several rows

<div class="row">
	<div class="col-md-6">1-1</div>
	<div class="col-md-6">1-2</div>
    <!-- start a new line by w-100 div -->
    <div class="w-100"></div>
	<div class="col-md-6">2-1</div>
	<div class="col-md-6">2-2</div>
</div>

### one column width

<div class="container">
	<div class="row">
		<div class="col">1-1</div>
		<div class="col-2">1-2</div>
	</div>
	<div class="row">
		<div class="col">2-1</div>
		<div class="col-6">2-2</div>
	</div>
</div>

### changable width

<div class="container">
	<div class="row">
		<div class="col-auto">1-1</div>
        <div class="col-auto">1-2</div>
	</div>
</div>

### mixed layout

<div class="container">
	<div class="row">
		<div class="col-sm-6 col-lg-3">1-1</div>
		<div class="col-sm-6 col-lg-3">1-2</div>
    </div>
</div>

### Align

#### Vertical align

##### row(align-items-start/center/end)

  <div class="container">
  	<div class="row align-items-start">
  		<div class="col" style="background:red;">
  			111
  		</div>
  		<div class="col" style="background:green;">
  			1-2
  		</div>
  	</div>
  </div>

##### column(align-self-start/center/end)

  <div class="container">
  	<div class="row">
  		<div class="col align-self-start" style="background:red;">
  			111
  		</div>
  		<div class="col align-self-center" style="background:green;">
  			222
  		</div>
  		<div class="col align-self-start" style="background:blue;">
  			333
  		</div>
  	</div>
  </div>

#### Horizontal align(justify-content-start/center/end/around/between)

<div class="container">
	<div class="row justify-content-start">
		<div class="col-4" style="background:red">
			1-1
		</div>
		<div class="col-4" style="background:green">
			1-2
		</div>
	</div>
</div>

### remove gap/gutter

<div class="container">
	<div class="row no-gutters" style="border:1px solid #F00;">
		<div class="col-4" style="background:red;">
			1-1
		</div>
		<div class="col-4" style="background:green;">
			1-2
		</div>
	</div>
</div>

### Reorder

<div class="container">
	<div class="row">
		<div class="col order-12">1-1</div>
		<div class="col order-0">1-2</div>
		<div class="col order-first">1-3</div>
	</div>
</div>

### offset

<div class="container">
	<div class="row">
		<div class="col-4 offset-md-4" style="background:red;">
			1-1
		</div>
		<div class="col-4 offset-4" style="background:green;">
			1-2
		</div>
	</div>
</div>

### stand left and right

<div class="container">
	<div class="row">
		<div class="col-4 mr-auto" style="background:red;">
			1-1
		</div>
		<div class="col-4 ml-md-auto" style="background:green;">
			1-2
		</div>
	</div>
</div>

### embed column in row

<div class="container">
	<div class="row">
		<div class="col-md-4">
			<div class="row">
				<div class="col-md-2">
					1-1-1
				</div>
				<div class="col-md-6">
					1-1-2
				</div>
			</div>
		</div>
	</div>
</div>

## Response

### four ways not use response

1. set container width
2. use col-1 not col-ml-1
3. remove viewport
4. remove nav fold and open

### media response

<style>
	.xx{color:red;}

	@media(min-width: 800px){
		.xx{color:green;}
	}
	
	@media(min-width: 1200px) and (max-width: 1400px){
		.xx{color:blue;}
	}
</style>
