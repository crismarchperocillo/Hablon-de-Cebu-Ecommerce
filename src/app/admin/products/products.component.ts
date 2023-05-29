import { Component, OnInit } from '@angular/core';
import { Product, products } from '../../product';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { CATEGORY } from 'src/app/category';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  isShown?: boolean = true;
  currentIndex!: number;
  category = CATEGORY;
  
  //add data

  name = "";
  description = "";
  price = "";
  categories = "";
  url: any;
  
  prod: Product[] = products;

  isClicked: boolean = false;
  enterHit: boolean = false;
  ifClicked: boolean = false;


  productForm: FormGroup = new FormGroup({

  name: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
  price: new FormControl('', Validators.required),
  category: new FormControl('', Validators.required),
  image: new FormControl('', Validators.required),
  quantity: new FormControl(1)

});

addNewProduct(): void{
  console.log(this.productForm.value);
  this.prod.push(this.productForm.value);
  
  this.ifClicked = !this.ifClicked  
  this.isShown = !this.isShown; 
  
  this.productForm.reset();
}
editNewProduct(prod: any, index: number): void{
 
  this.productForm.get('name')?.patchValue(prod.name),
  this.productForm.get('description')?.patchValue(prod.description),
  this.productForm.get('price')?.patchValue(prod.price),
  this.productForm.get('category')?.patchValue(prod.category),
  this.productForm.get('image')?.patchValue(prod.image),
  this.currentIndex = index;
}
setNewProduct(): void {
  this.prod[this.currentIndex] = this.productForm.value;
  
  this.isClicked = !this.isClicked
  this.isShown = !this.isShown;
}
deleteNewProduct(index: number): void {
  if (confirm('Do you want to delete this product?')){
    this.prod.splice(index, 1);
  }
   
}
selectedFile(event:any){
  if(!event.target.files[0] || event.target.files[0].length == 0){
    window.alert("You must select an image");
    return;
  }
  var mimeType = event.target.files[0].type;

  if (mimeType.match(/image\/*/) == null ){
    window.alert("Only images are allowed");
    return;
  }
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);

  reader.onload = (_event) => {
    this.url = reader.result;
  }
}
onEnter(){
  this.enterHit =!this.enterHit
}
toggleShow() {
  this.isClicked = !this.isClicked
  this.isShown = !this.isShown;
}
cancelAdd(){
  this.ifClicked = !this.ifClicked
  this.isShown = !this.isShown;
}
cancelEdit(){
  this.isClicked = !this.isClicked
  this.isShown = !this.isShown;
}

  constructor(
    private router: Router) { 

    }
ngOnInit(): void {
}
public validate(): void {
  if (this.productForm.invalid) {
    for (const control of Object.keys(this.productForm.controls)) {
      this.productForm.controls[control].markAsTouched();
    }
    return;
  }
  this.productForm = this.productForm.value;
};

  openAddProduct(){
    this.ifClicked = !this.ifClicked
    this.isShown = !this.isShown;
  }
  
  isEnter(){
    this.enterHit =!this.enterHit
  }
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
}
/*
  onFileChanged(event: any){
    this.imageShow = event.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.imageShow = (<FileReader>event.target).result;
      }
  } */

}
