import {useForm} from 'react-hook-form';

export default function IntroForm() {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Name of Restaurant"
				{...register('Restaurant Name', {
					required: true,
				})}
			/>

			<select {...register('Type of Food', {required: true})}>
				<option value="French Cuisine">French Cuisine</option>
				<option value="Chinese Cuisine">Chinese Cuisine</option>
				<option value="Japanese Cuisine">Japanese Cuisine</option>
				<option value="Italian Cuisine">Italian Cuisine</option>
				<option value="Greek Cuisine">Greek Cuisine</option>
				<option value="Spanish Cuisine">Spanish Cuisine</option>
				<option value="Lebanese Cuisine">Lebanese Cuisine</option>
				<option value="Moroccan Cuisine">Moroccan Cuisine</option>
				<option value="Turkish Cuisine">Turkish Cuisine</option>
				<option value="Thai Cuisine">Thai Cuisine</option>
				<option value="Indian Cuisine">Indian Cuisine</option>
				<option value="Mexican Cuisine">Mexican Cuisine</option>
				<option value="German Cuisine">German Cuisine</option>
				<option value="Hungarian Cuisine">Hungarian Cuisine</option>
				<option value="American Cuisine">American Cuisine</option>
			</select>
			<select {...register('Price Level', {required: true})}>
				<option value="€">€</option>
				<option value="€€">€€</option>
				<option value="€€€">€€€</option>
				<option value="€€€€">€€€€</option>
			</select>

			<input type="submit" />
		</form>
	);
}
