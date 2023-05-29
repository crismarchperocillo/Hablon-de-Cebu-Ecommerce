import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CATEGORY, Category} from '../../category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //add-edit category
  catname = "";
  category: Category[] = CATEGORY;
  currentIndex!: number;
  modeEditForm: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  categoryForm: FormGroup = new FormGroup({
  name: new FormControl('', Validators.required)
});

addCategory(): void {
  console.log('test');
  this.category.push(this.categoryForm.value)
  if (this.modeEditForm) {
    this.modeEditForm = false;
  }
  this.categoryForm.setValue({name: ''});
}

editCategory(category: any, index: number): void{
  console.log('running');
  this.modeEditForm = true;
  this.categoryForm.get('name')?.patchValue(category.name);
  this.currentIndex = index;
}
setCategory(): void {
  console.log('saved');
  this.category[this.currentIndex] =
  this.categoryForm.value;
  this.categoryForm.setValue({name: ''});
  this.modeEditForm = false;
  
}
deleteCategory(index: number): void {
  if (confirm("Do you want to delete this category?")){
    this.category.splice(index, 1);
    this.categoryForm.setValue({name: ''});
  }
 
}
}