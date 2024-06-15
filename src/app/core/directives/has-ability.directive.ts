/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { PermissionChecker } from '../helpers/permission.checker';

@Directive({
  selector: '[imsHasAbility]',
  standalone: true,
})
export class HasAbilityDirective implements OnInit {
  @Input() permission!: string;
  // @Input() updatePermission: unknown;

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _permissionChecker: PermissionChecker,
  ) {}
  ngOnInit(): void {
    if (!this._permissionChecker.has(this.permission))
      this._elementRef.nativeElement.remove();
  }
}
