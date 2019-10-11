<template>
    <div class="file-modal">
         <div class="modal fade bd-example-modal-lg show_data image_insert" id="ifcModal1" tabindex="-1" role="dialog" aria-labelledby="fileModalLabel" aria-hidden="true" style="overflow-y:auto;">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Files</h5>
                    </div>
                    <div class="modal-body">
                        <UplaodArea />
                    </div>
                    <div class="modal-footer">
                        <div class="inner_footer_content" >
                            <button class="btn bottom_btn width_half" data-dismiss="modal">
								<i class="ti-close" aria-hidden="true" ></i>
							</button>
                            <button class="btn bottom_btn width_half"  data-dismiss="modal">
								<i class="ti-check"></i>
							</button>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

