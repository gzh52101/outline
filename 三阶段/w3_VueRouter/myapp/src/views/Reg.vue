<template>
    <div>
        <h1>用户注册</h1>
        <el-form
            :model="formData"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            status-icon
        >
            <el-form-item
                label="用户名"
                prop="username"
            >
                <el-input v-model="formData.username" />
            </el-form-item>
            <el-form-item
                label="密码"
                prop="password"
            >
                <el-input
                    type="password"
                    v-model="formData.password"
                    show-password
                />
            </el-form-item>
            <el-form-item
                label="验证码"
                prop="vcode"
            >
                <el-input v-model="formData.vcode">
                    <template v-slot:append>
                        <span
                            v-html="imgvcode"
                            @click="getVcode"
                            class="vcode"
                        ></span>
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button
                    type="primary"
                    @click="submitForm"
                >免费注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
let checkUsername = function(rule, value, callback) {
  // rule 校验规则
  // value 当前字段值
  // callback 回调函数，用于确定校验是否通过
  this.$request
    .get("/user/check", {
    //   params: {
    //     username: value
    //   }
        username:value
    })
    .then((data) => {
      if (data.code === 400) {
        callback(new Error("用户名已存在"));
      } else if (data.code === 200) {
        callback();
      }
    });
};
export default {
  name: "Reg",
  data() {
    checkUsername = checkUsername.bind(this);
    return {
      imgvcode: "",
      formData: {
        username: "",
        password: "",
        vcode: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 5,
            max: 20,
            message: "用户名长度必须为 5 到 20 个字符",
            trigger: "blur"
          },
          { validator: checkUsername, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "密码长度必须为 6 到 30 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        // valid 为boolean，表示表单是否校验通过
        console.log("valid", valid);
        if (valid) {
          const { username, password, vcode } = this.formData;
          this.$request
            .post(
              "/reg",
              {
                username,
                password,
                vcode
              }
            )
            .then((data) => {
              if (data.code === 200) {
                this.$router.push("/login");
              } else if (data.code === 401) {
                this.$message.error("验证码错误");
              }
            });
        }
      });
    },
    getVcode() {
      this.$request
        .get("/vcode/picture")
        .then((data) => {
          this.imgvcode = data.data;
        });
    }
  },
  created() {
    console.log("Reg=", this);
    // hard code
    this.getVcode();
  }
};
</script>
<style>
.vcode {
  display: block;
  margin: 0 -20px;
  width: 120px;
  height: 38px;
  overflow: hidden;
}
.vcode svg {
  width: 120px;
  height: 40px;
}
</style>

