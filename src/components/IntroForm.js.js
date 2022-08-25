import {nanoid} from 'nanoid';
import {useState} from 'react';
import {useForm} from 'react-hook-form';

export default function IntroForm() {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();

	const [restaurant, setRestaurant] = useState([
		{
			restaurantName: 'Restaurant Name',
			typeOfFood: 'Type of Food',
			priceLevel: 'Price Level',
			id: nanoid(),
		},
	]);

	function onSubmit(data) {
		console.log(data);

		setRestaurant([...restaurant, {...data, id: nanoid()}]);
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Name of Restaurant"
					id="restaurantName"
					{...register('restaurantName', {
						required: true,
					})}
				/>

				{errors.restaurantName && <p>Name of restaurant is required</p>}

				<select id="typeOfFood" {...register('typeOfFood', {required: true})}>
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

				{errors.typeOfFood && <p>Type of food is required</p>}

				<select id="priceLevel" {...register('priceLevel', {required: true})}>
					<option value="€">€</option>
					<option value="€€">€€</option>
					<option value="€€€">€€€</option>
					<option value="€€€€">€€€€</option>
				</select>

				<input type="submit" />
			</form>
			<ul>
				{restaurant.map(person => {
					return (
						<li key={person.id}>
							{person.restaurantName} {person.typeOfFood} {person.priceLevel}
						</li>
					);
				})}
			</ul>
		</>
	);
}
