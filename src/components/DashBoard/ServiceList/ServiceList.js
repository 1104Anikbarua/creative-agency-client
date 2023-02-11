import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
// import { Link } from 'react-router-dom';
// import service1 from '../../../images/icons/service1.png'
// import service2 from '../../../images/icons/service2.png'
// import service3 from '../../../images/icons/service3.png'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const ServiceList = () => {
    const [user] = useAuthState(auth);
    const { email } = user;
    // console.log(email);
    // const [status, setStatus] = useState();
    // console.log(status)
    // useEffect(() => {
    //     fetch(`http://localhost:5000/v1/update?email=${email}`)
    //         .then(response => response.json())
    //         .then(data => setStatus(data))
    // }, [email])

    const { data: services, isLoading } = useQuery(['order', email], () => fetch(`http://localhost:5000/v1/order?email=${email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(response => response.json()));
    console.log('inside services', services, services?.length)
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    };

    const handleOrder = (event) => {
        event.preventDefault();

        let element;
        for (let i = services.length - 1; i >= 0; i--) {
            element = services[i];

        }
        console.log(element)

        const id = element?._id;
        const projectName = element?.projectName;
        const price = element?.price;
        const company = element?.companyName;
        const projectDescription = element?.projectDescription;

        const orderDetails = {
            serviceId: id,
            serviceName: projectName,
            servicePrice: price,
            email: user?.email,
            companyName: company,
            projectDescription: projectDescription
        };
        console.log('inside funtions', orderDetails);
        fetch(`http://localhost:5000/v1/payment/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderDetails)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                window.location.replace(data.url)
            })

    }

    return (
        <form className='w-full h-screen bg-success'>
            <div className='max-w-[1170px] mx-auto h-screen'>
                <div className='grid lg:grid-cols-2 gap-9'>

                    {

                        services?.map((service, index) =>
                            <div key={index} className='w-[415px] h-[254px] text-center shadow-2xl p-6 border-2 border-gray-400 rounded-[20px] bg-white'>
                                <div className='flex items-center'>
                                    <div>
                                        <img className='w-[74px] h-[74px] mr-[184px]' src={service.projectImage} alt="" />

                                    </div>
                                    <div>
                                        {service?.paid ?
                                            <button className='w-[108px] h-[40px] bg-error rounded text-green-400 text-base cursor-no-drop' style={{ backgroundColor: '#C6FFE0' }}

                                                disabled={service?.paid === true}
                                            >Download</button> :

                                            <button className='w-[108px] h-[40px] bg-error rounded text-red-400 text-base'
                                                onClick={handleOrder}
                                            >Pay</button>}

                                    </div>
                                </div>
                                <h1 className='font-semibold text-xl py-[18px] text-secondary'>{service.projectName}</h1>
                                <p className='text-base text-slate-400' title={service.projectDescription}>{service.projectDescription?.slice(0, 50)}{service.projectDescription?.length > 50 ? '...' : '.'}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </form>
    );
};

export default ServiceList;