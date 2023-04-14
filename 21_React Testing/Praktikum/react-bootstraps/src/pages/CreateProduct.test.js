import { mount } from "enzyme";
import ProductForm from "../components/ProductForm";

describe('ProductForm', () => {
    it('should update state when input values change', () => {
        const wrapper = mount(<ProductForm />);
        const productNameInput = wrapper.find('#productName');
        //   const emailInput = wrapper.find('#email');

        productNameInput.simulate('change', { target: { value: 'John Doe' } });
        //   emailInput.simulate('change', { target: { value: 'john.doe@example.com' }});

        expect(wrapper.state('productName')).toEqual('John Doe');
        //   expect(wrapper.state('email')).toEqual('john.doe@example.com');
    });
});

