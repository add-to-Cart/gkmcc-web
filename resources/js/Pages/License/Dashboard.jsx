import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ pastors }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Licensing
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        {pastors.length === 0 ? (
                            <p className="text-center text-gray-600">No pastor registrations found.</p>
                        ) : (
                            pastors.map((pastor) => (
                                <div
                                    key={pastor.id}
                                    className="bg-white shadow-sm rounded-lg overflow-hidden p-6 flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6"
                                >

                                    <div className="flex-grow">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">ID No.</label>
                                                <p className="text-sm text-gray-600">{pastor.id_no}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">Name</label>
                                                <p className="text-sm text-gray-600">
                                                    {pastor.surname}, {pastor.given_name} {pastor.middle_name} {pastor.suffix}
                                                </p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">Birthday</label>
                                                <p className="text-sm text-gray-600">{new Date(pastor.birthday).toLocaleDateString()}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">Place of Birth</label>
                                                <p className="text-sm text-gray-600">{pastor.place_of_birth}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">Home Address</label>
                                                <p className="text-sm text-gray-600">{pastor.home_address}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">Church Address</label>
                                                <p className="text-sm text-gray-600">{pastor.church_address}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">Mother Church</label>
                                                <p className="text-sm text-gray-600">{pastor.mother_church}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">TIN No.</label>
                                                <p className="text-sm text-gray-600">{pastor.tin_no}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">SSS No.</label>
                                                <p className="text-sm text-gray-600">{pastor.sss_no}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="font-medium text-gray-700">Contact No.</label>
                                                <p className="text-sm text-gray-600">{pastor.contact_no}</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex flex-col items-center justify-between sm:w-48 space-y-4">

                                        <div className="w-full flex justify-center">
                                            <img
                                                src={pastor.picture_path ? `/storage/${pastor.picture_path}` : '/default-profile.jpg'}
                                                alt={`${pastor.surname} ${pastor.given_name}`}
                                                className="w-32 h-32 object-cover rounded-full border-4 border-indigo-600"
                                            />
                                        </div>


                                        <div className="w-full flex justify-center">
                                            <img
                                                src={pastor.signature_path ? `/storage/${pastor.signature_path}` : '/default-signature.jpg'}
                                                alt={`${pastor.surname} signature`}
                                                className="w-32 h-32 object-cover border-4 border-indigo-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
