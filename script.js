let product = [
	{
		id: 'ct-xamL',
		name: 'Áo phông nam cơ bản cổ tim',
		type: 'ct',
		color: 'Đỏ',
		size: 'L',
		gender: 'Nam',
		cost: '129000',
		image: 'xzczx.png'
	},
	{
		id: 'ct-xamS',
		name: 'Áo phông nam cơ bản cổ tim',
		type: 'ct',
		color: 'Đỏ',
		size: 'S',
		gender: 'Nam',
		cost: '129000',
		image: 'xzczx.png'	
	},
	{
		id: 'ct-xamM',
		name: 'Áo phông nam cơ bản cổ tim',
		type: 'ct',
		color: 'Đỏ',
		size: 'M',
		gender: 'Nam',
		cost: '129000',
		image: 'xzczx.jpg'
	}
];
console.log(product["length"]);
for(item of product) {
	let  id      = item.id;
	let  name    = item.name;
	let  type    = item.type;
	let  gender  = item.gender;
	let  color   = item.color;
	let  size    = item.size;
	let  cost    = item.cost;
	let  url     = item.image;
	$('.productTable').append('<tr><th scope="col">'+ id +'</th><td>'+name+'</td><td>'+type+'</td><td>'+gender+'</td><td>'+color+'</td><td>'+size+'</td><td>'+cost+'</td><td>'+url+'</td><td><i class="fas fa-user-edit" onclick="updateE(this);"></i></td><td><i class="fas fa-trash" onclick="deleteE(this);"></i></td></tr>');
}
	
$('.btn-primary').click(() => {
	$('.addItem').attr("style", "display: block;");
});

let arrID = product.map(x => x.id);
$('.btn-hide').click(() => {
	let id = $('input[name = "Product_id"]').val();
	let name = $('input[name = "Name"]').val();
	let type = $('input[name = "Type"]').val();
	let gender = $('select[name = "Gender"]').val();
	let color = $('input[name = "Color"]').val();
	let size = $('input[name = "Size"]').val();
	let cost = $('input[name = "Cost"]').val();
	let url = $('input[name = "Image"]').val();
	if(arrID.indexOf(id) == -1) {
		product.push({
			id: id,
			name: name,
			type: type,
			color: color,
			size: size,
			gender: gender,
			cost: cost,
			image: url
		})
		$('.productTable').append('<tr><th scope="col">'+ id +'</th><td>'+name+'</td><td>'+type+'</td><td>'+gender+'</td><td>'+color+'</td><td>'+size+'</td><td>'+cost+'</td><td>'+url+'</td><td><i class="fas fa-user-edit"></i></td><td><i class="fas fa-trash"></i></td></tr>');
	} else {
		// $('.container').append('<h2>Trùng ID. Nhập lại!</h2>');
		$('.addItem').attr("style", "display: none;");
	}
	$('.addItem').attr("style", "display: none;");
});

function deleteE(e) {
	e.parentElement.parentElement.remove();
}

function updateE(e) {
	e.parentElement.attr('contenteditable', 'true');
	console.log(e.parentElement);
}