<?php

namespace App\Http\Controllers\BookPdf;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use setasign\Fpdi\Fpdi;
use App\Model\userBook;

class PdfController extends BookController
{
    public function download_pdf($pageId)
    {
        $bookData = userBook::where('user_id', 1)
        ->first();
        if($bookData) {
            // get book data
            $bookData->front_cover = $bookData->front_cover ? unserialize($bookData->front_cover) : '';
            $bookData->inside_front_cover = $bookData->inside_front_cover ? unserialize($bookData->inside_front_cover) : '';
            $bookData->inside_back_cover = $bookData->inside_back_cover ? unserialize($bookData->inside_back_cover) : '';
            $bookData->back_cover = $bookData->back_cover!='' ? unserialize($bookData->back_cover) : '';

            // start pdf here
            $pdf = new Fpdi('P','mm', array(204.7875, 273.05));

            if ($pageId == '1') {
                // $nameBook = $this->getBookName($bookId, $authId, 'FC');
                // $path = 'tempUserPDF/FC.pdf';
                $name = 'fc';
                $pdf = $this->frontCover($pdf, $bookData);
            }
            if ($pageId == '2') {
                // $nameBook = $this->getBookName($bookId, $authId, 'IFC');                
                // $path = 'tempUserPDF/'.$nameBook.'.pdf';
                $pdf = $this->insideFrontCover($pdf, $bookData);
            }
            if ($pageId == '3') {
                // $nameBook = $this->getBookName($bookId, $authId, 'IBC');
                // $path = 'tempUserPDF/'.$nameBook.'.pdf';
                $pdf = $this->insideBackCover($pdf, $bookData);
            }
            if ($pageId == '4') {
                // $nameBook = $this->getBookName($bookId, $authId, 'BC');
                // $path = 'tempUserPDF/'.$nameBook.'.pdf';
                $pdf = $this->backCover($pdf, $bookData);
            }
            $filename="tempUserPDF/fc.pdf";
            $pdf->Output(public_path($filename),'F');
            // $pdf->Output();


            $url = url('/tempUserPDF/fc.pdf');
            return response()->json([
                'success' => true,
                'url' => $url,
                'name'   =>  $name
            ],200);
        }
    }
    public function frontCover($pdf,$bookData)
    {
        $pdf->AddPage();

        $pdf->setSourceFile('pdfFiles/fc.pdf');
        $tplId1 = $pdf->importPage(1);

        $pdf->useTemplate($tplId1, 0, 0, 204.7875, 273.05);

        $pdf->SetTextColor(0, 0, 0, 100);

        $pdf->AddFont('Corbel', '','Corbel.php');
        $pdf->SetFont('Corbel','', 20);
        // dd($bookData->front_cover);
        $pdf->SetXY(90, 13);
        if($bookData->front_cover['radioButton'] == 'textLogo'){
            $title = strip_tags($bookData->front_cover['fcTextLogoEditor']);
            $pdf->cell(27, 10, $title, 0, 1, 'C');
        }elseif($bookData->front_cover['radioButton'] == 'addMedia'){            
            $media = public_path($bookData->front_cover['fcImage']);
            $this->imageCenterCell($pdf,$media,90,10,40,20);
        }elseif ($bookData->front_cover['radioButton'] == 'default') {
            $media = public_path($bookData->front_cover['defaultImage']);
            $this->imageCenterCell($pdf,$media,90,10,40,20);
        }
        
        return $pdf;
    }
}
