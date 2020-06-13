let product = [
	{
		id: "ct-xamL",
		name: "Áo phông nam cơ bản cổ tim",
		type: "ct",
		color: "Đỏ",
		size: "L",
		gender: "Nam",
		cost: "129000",
		image: "xzczx.png",
	},
	{
		id: "ct-xamS",
		name: "Áo phông nam cơ bản cổ tim",
		type: "ct",
		color: "Đỏ",
		size: "S",
		gender: "Nam",
		cost: "129000",
		image: "xzczx.png",
	},
	{
		id: "ct-xamM",
		name: "Áo phông nam cơ bản cổ tim",
		type: "ct",
		color: "Đỏ",
		size: "M",
		gender: "Nam",
		cost: "129000",
		image: "xzczx.jpg",
	},
];
console.log(product["length"]);

for (item of product) {
	let id = item.id;
	let name = item.name;
	let type = item.type;
	let gender = item.gender;
	let color = item.color;
	let size = item.size;
	let cost = item.cost;
	let url = item.image;
	$(".productTable").append(
		'<tr><th scope="col">' +
			id +
			"</th><td>" +
			name +
			"</td><td>" +
			type +
			"</td><td>" +
			gender +
			"</td><td>" +
			color +
			"</td><td>" +
			size +
			"</td><td>" +
			cost +
			"</td><td>" +
			url +
			'</td><td><i class="fas fa-user-edit" onclick="updateE(this);"></i></td><td><i class="fas fa-trash" onclick="deleteE(this);"></i></td></tr>'
	);
}

$(".btn-primary").click(() => {
	$(".addItem").attr("style", "display: block;");
});

$(".btn-hide").click(() => {
	let id = $('input[name = "Product_id"]').val();
	let name = $('input[name = "Name"]').val();
	let type = $('input[name = "Type"]').val();
	let gender = $('select[name = "Gender"]').val();
	let color = $('input[name = "Color"]').val();
	let size = $('input[name = "Size"]').val();
	let cost = $('input[name = "Cost"]').val();
	let url = $('input[name = "Image"]').val();
	let arrID = product.map((x) => x.id);
	
	if (arrID.indexOf(id) == -1) {
		product.push({
			id: id,
			name: name,
			type: type,
			color: color,
			size: size,
			gender: gender,
			cost: cost,
			image: url,
		});
		$(".productTable").append(
			'<tr><th scope="col">' +
				id +
				"</th><td>" +
				name +
				"</td><td>" +
				type +
				"</td><td>" +
				gender +
				"</td><td>" +
				color +
				"</td><td>" +
				size +
				"</td><td>" +
				cost +
				"</td><td>" +
				url +
				'</td><td><i class="fas fa-user-edit" onclick="updateE(this);"></i></td><td><i class="fas fa-trash" onclick="deleteE(this);"></i></td></tr>'
		);
	} else {
		$(".addItem").attr("style", "display: none;");
	}
	$(".addItem").attr("style", "display: none;");
});

function deleteE(e) {
	e.parentElement.parentElement.remove();
	product.splice(product.indexOf(e.parentElement.parentElement.childNodes[0].innerHTML), 1);
}

function updateE(e) {
	e.parentElement.parentElement.contentEditable = "true";
	var thisTR = $(e.parentElement.parentElement);
	thisTR.focus();
	thisTR.focusout(function() {
		var id = thisTR[0].childNodes[0].innerHTML;
		var name = thisTR[0].childNodes[1].innerHTML;
		var type = thisTR[0].childNodes[2].innerHTML;
		var gender = thisTR[0].childNodes[3].innerHTML;
		var color = thisTR[0].childNodes[4].innerHTML;
		var size = thisTR[0].childNodes[5].innerHTML;
		var cost = thisTR[0].childNodes[6].innerHTML;
		var url = thisTR[0].childNodes[7].innerHTML;
	
		let arrID = product.map((x) => x.id);
		let index = arrID.indexOf(id);
	
		product[index].id = id;
		product[index].name = name;
		product[index].type = type;
		product[index].gender = gender;
		product[index].color = color;
		product[index].size = size;
		product[index].cost = cost;
		product[index].url = url;
		e.parentElement.parentElement.contentEditable = "false";
	});

	// console.log(e.parentElement);
}
