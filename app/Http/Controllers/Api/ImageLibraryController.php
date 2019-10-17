<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\ImageLibrary;
use DB;

class ImageLibraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $library = ImageLibrary::orderBy('id', 'DESC')->get();
        $image = [];
        foreach ($library as $key => $value) {
            if(file_exists(\public_path($value->path))){
                $image[]['path']=$value->path;
            }
        }
        return response()->json([
            'success'    => true,
            'data'       => $image,
            'message'    => 'Library Data found',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $tempname = explode('.', $image->getClientOriginalName());
                $tempname = str_replace(' ', '_', $tempname);
                $name = time().'.'.$image->getClientOriginalExtension();
                // $path = 'uploads/book'.$request->get('bookId').'/'.$request->get('coverPage');
                $path = '/uploads/0000';
                if (! \File::isDirectory(public_path().$path)) {
                    \File::makeDirectory(public_path().$path, 0777, true, true);
                    // $path = public_path()."/uploads/0000";
                }
                $destinationPath = public_path($path);
                $imagePath = $destinationPath. "/". $name;
                $image->move($destinationPath, $name);
                
                $data = ImageLibrary::create([
                    // 'user_id'       => Auth::user()->id,
                    'user_id'       => 1,
                    'path'          => $path.'/'.$name,
                    'type'          => $request->get('type')
                ]);
                DB::commit();
                $library = ImageLibrary::orderBy('id', 'DESC')->where('user_id', 1)->get();
                $image = [];
                foreach ($library as $key => $value) {
                    if(file_exists(\public_path($value->path))){
                        $image[]['path']=$value->path;
                    }
                }
            }
            return response()->json([
                'message'     => 'Created!',
                // 'data'      => MyLibrary::where('user_id', Auth::user()->id)->get(),
                'data'      => $image,
                'uploadImage' => $path.'/'.$name,
                'success'   => true,
            ], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message'     => $e->getMessage(),
                'data'      => $e,
                'success'   => false,
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

