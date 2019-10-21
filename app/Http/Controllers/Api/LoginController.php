<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request , [
            'email' => 'required',
            'password'  =>  'required'
        ]);
        try {
            $email = $request->get('email');
            $password = $request->get('password');
            $credentials = $request->only('email', 'password');
            $user = User::where('email',$email)->first();
            if($user){
                if(!\Hash::check($request->get('password'),$user->password)){
                    // return response with error message
                    return response()->json([
                        'message'      => 'Password is Wrong!',
                        'success'           => false,
                    ], 500);
                }
                if(Auth::attempt($credentials)){
                    $user = Auth::user();
                    $success['token'] =  $user->createToken('MyApp')->accessToken;
                    return response()->json([
                        'message'     => 'Authenticated!',
                        'data'      => $user,
                        'accessToken'   => $success['token'],
                        'success'   => true,
                    ],200);
                }
            }else{
                return response()->json([
                    'message' => 'User not found!',
                    'success' => false,
                ],500);
            }
        } catch (\Throwable $th) {
            //throw $th;
            dd($th);
            return response()->json([
                'message'     => 'Something went wrong!',
                'data'      => $th->getMessage,
                'success'   => false,
            ], 500);
        }
    }
    public function logout()
    {
        Auth::logout();
        return response()->json([
            'message'   =>  'Logout successfully!',
            'success'   =>  true,
        ],200);
    }
}
