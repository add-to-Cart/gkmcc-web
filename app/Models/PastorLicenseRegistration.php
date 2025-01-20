<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PastorLicenseRegistration extends Model
{
    use HasFactory;

    protected $table = 'pastor_license_registrations'; // Define the table name explicitly if necessary

    // Specify the fields that can be mass-assigned
    protected $fillable = [
        'id_no',
        'surname',
        'given_name',
        'middle_name',
        'suffix',
        'birthday',
        'place_of_birth',
        'home_address',
        'church_address',
        'mother_church',
        'tin_no',
        'sss_no',
        'contact_no',
        'picture_path',
        'signature_path',
    ];
}
