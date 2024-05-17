import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserRules, UserValidator, UserValidatorFactory } from '../../user.validator';

let sut: UserValidator;

describe('UserValidator unit tests', () => {
   beforeEach(() => {
      sut = UserValidatorFactory.create();
   });

   describe('Name field', () => {
      it('Name field is null - error', () => {
         const isValid = sut.validate(null as any);
         expect(isValid).toBeFalsy();
         expect(sut.errors['name']).toStrictEqual([
            'name should not be empty',
            'name must be a string',
            'name must be shorter than or equal to 255 characters',
         ]);
      });

      it('Name field is empty - error', () => {
         const isValid = sut.validate({
            ...UserDataBuilder({}),
            name: '' as any,
         });
         expect(isValid).toBeFalsy();
         expect(sut.errors['name']).toStrictEqual(['name should not be empty']);
      });

      it('Name field is not a string - error', () => {
         const isValid = sut.validate({
            ...UserDataBuilder({}),
            name: 10 as any,
         });
         expect(isValid).toBeFalsy();
         expect(sut.errors['name']).toStrictEqual([
            'name must be a string',
            'name must be shorter than or equal to 255 characters',
         ]);
      });

      it('Name field is larger then 255 character - error', () => {
         const isValid = sut.validate({
            ...UserDataBuilder({}),
            name: 'a'.repeat(256) as any,
         });
         expect(isValid).toBeFalsy();
         expect(sut.errors['name']).toStrictEqual([
            'name must be shorter than or equal to 255 characters',
         ]);
      });

      it('Name field is valid', () => {
         const props = UserDataBuilder({});
         const isValid = sut.validate(props);
         expect(isValid).toBeTruthy();
         expect(sut.validatedData).toStrictEqual(new UserRules(props));
      });
   });

   describe('Email field', () => {
      it('Email field is null - error', () => {
         const isValid = sut.validate(null as any);
         expect(isValid).toBeFalsy();
         console.log(sut.errors);
      });

      it('Email field is empty - error', () => {
         const isValid = sut.validate({
            ...UserDataBuilder({}),
            email: '' as any,
         });
         expect(isValid).toBeFalsy();
         expect(sut.errors['email']).toStrictEqual([
            'email should not be empty',
            'email must be an email',
         ]);
      });

      it('Email field is not a string - error', () => {
         const isValid = sut.validate({
            ...UserDataBuilder({}),
            email: 10 as any,
         });
         expect(isValid).toBeFalsy();
         expect(sut.errors['email']).toStrictEqual([
            'email must be a string',
            'email must be an email',
            'email must be shorter than or equal to 255 characters',
         ]);
      });

      it('Email field is not a email - error', () => {
         const isValid = sut.validate({
            ...UserDataBuilder({}),
            email: 10 as any,
         });
         expect(isValid).toBeFalsy();
         expect(sut.errors['email']).toStrictEqual([
            'email must be a string',
            'email must be an email',
            'email must be shorter than or equal to 255 characters',
         ]);
      });

      it('Email field is larger then 255 character - error', () => {
         const isValid = sut.validate({
            ...UserDataBuilder({}),
            email: 'a'.repeat(256) as any,
         });
         expect(isValid).toBeFalsy();
         expect(sut.errors['email']).toStrictEqual([
            'email must be an email',
            'email must be shorter than or equal to 255 characters',
         ]);
      });

      it('Email field is valid', () => {
         const props = UserDataBuilder({});
         const isValid = sut.validate(props);
         expect(isValid).toBeTruthy();
         expect(sut.validatedData).toStrictEqual(new UserRules(props));
      });
   });
});
