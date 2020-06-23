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
// console.log(product["length"]);
function render() {
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
			'<tr><th scope="col">' + id + "</th><td>" + name + "</td><td>" + type + "</td><td>" + gender + "</td><td>" + color + "</td><td>" + size + "</td><td>" + cost + "</td><td>" + url + '</td><td><i class="fas fa-user-edit" onclick="updateE(this);"></i></td><td><i data-toggle="modal" data-target="#delItem" class="fas fa-trash" onclick="deleteE(this);"></i></td></tr>'
		);
	}
};
render();

function noti(type, message) {
	let noti = $('[class |="noti"]');
	if(type == 'success' || type == 'edit') {
		noti.attr('class', 'noti-'+ type +'').html('<i class="fas fa-check"></i>'+ message +'');
		setTimeout(function() {
			noti.html('');
		}, 5000);
	} else if ( type == 'warning') {
		noti.attr('class', 'noti-'+ type +'').html('<i class="far fa-times"></i> '+ message +'');
		setTimeout(function() {
			noti.html('');
		}, 5000);
	}
}

//Click nút thêm mới -> Hiện khung nhập dữ liệu
$(".addNew").click(() => {
	$(".addItem").attr("style", "display: block;");
});
// Kiểm tra kiểu dữ liệu
function checking(id, name, type, size, cost) {
	if (id.length < 2) {
		noti('warning', 'ID phải lớn hơn 2 ký tự. Vui lòng nhập lại ID');
		$('input[name = "Product_id"]').focus();
		return false;
	}
	if (name.length < 2) {
		noti('warning', 'Tên sản phẩm phải lớn hơn 2 ký tự. Vui lòng nhập lại Tên sản phẩm');
		$('input[name = "Name"]').focus();
		return false;
	}
	if(type.length < 2) {
		noti('warning', 'Vui lòng nhập loại sản phẩm!');
		$('input[name = "Type"]').focus();
		return false;
	}
	if(size.length < 2) {
		noti('warning', 'Vui lòng nhập kích cỡ sản phẩm!');
		$('input[name = "Size"]').focus();
		return false;
	}
	if( cost <= 0) {
		noti('warning', 'Vui lòng nhập giá sản phẩm!');
		$('input[name = "Cost"]').focus();
		return false;
	}
	return true;
}
// Nếu click xác nhận thêm sản phẩm
$(".successAdd").click(() => {
	let id = $('input[name = "Product_id"]').val();
	let name = $('input[name = "Name"]').val();
	let type = $('input[name = "Type"]').val();
	let gender = $('select[name = "Gender"]').val();
	let color = $('input[name = "Color"]').val();
	let size = $('input[name = "Size"]').val();
	let cost = $('input[name = "Cost"]').val();
	let url = $('input[name = "Image"]').val();
	let arrID = product.map((x) => x.id);
	//Kiểm tra kiểm dữ liệu
	if(checking(id, name, type, size, cost)) {
		//Kiểm tra trùng ID
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
				'<tr><th scope="col">' + id + "</th><td>" + name + "</td><td>" + type + "</td><td>" + gender + "</td><td>" + color + "</td><td>" + size + "</td><td>" + cost + "</td><td>" + url + '</td><td><i class="fas fa-user-edit" onclick="updateE(this);"></i></td><td><i data-toggle="modal" data-target="#delItem" class="fas fa-trash" onclick="deleteE(this);"></i></td></tr>'
			);
				noti('success', 'Thêm sản phẩm thành công!');
		 		$('input[name = "Product_id"]').val('');
				$('input[name = "Name"]').val('');
				$('input[name = "Type"]').val('');
				$('select[name = "Gender"]').val('');
				$('input[name = "Color"]').val('');
				$('input[name = "Size"]').val('');
				$('input[name = "Cost"]').val('');
			 	$('input[name = "Image"]').val('');
			
		} else { // Nếu trùng ID
			noti('warning', 'ID sản phẩm đã được sử dụng. Vui lòng thử một ID khác!');
			$(".addItem").attr("style", "display: none;");
		}
			//Ẩn khung add khi hoàn thành
			$(".addItem").attr("style", "display: none;");
	}

});

//Huỷ thêm sản phẩm
document.querySelector('.cancelAdd').onclick = function() {
	$(".addItem").attr("style", "display: none;");
}

//Xoá sản phẩm
function deleteE(e) {
	$('.doneDel').click(function() {
		e.parentElement.parentElement.remove();
		product.splice(product.indexOf(e.parentElement.parentElement.childNodes[0].innerHTML), 1);
		$('#delItem').modal('hide');

		noti('success', 'Đã xoá sản phẩm!');
	});
}
//Cập nhật sản phẩm
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

		noti('edit', 'Sửa sản phẩm thành công!');
	});
}
