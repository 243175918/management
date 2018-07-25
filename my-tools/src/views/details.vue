<template>
    <div class="details">
        <el-form ref="form" :model="form" label-width="80px">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="20">
                    <el-form-item label="描述" style="background: #fafafa">
                        <div>
                            1111111111111111111111111111111111111111111111111111111111111
                            1111111111111111111111111111111111111111111111111111111111111
                            1111111111111111111111111111111111111111111111111111111111111
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="20">
                    <el-form-item label="代码">
                        <div>
                            222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222
                            222222222222222222222222222222222222222222222222222222222222
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>

<style>
    .details {
        padding: 50px 0;
    }
    .release .el-textarea__inner {
        height: 150px;
    }

</style>
