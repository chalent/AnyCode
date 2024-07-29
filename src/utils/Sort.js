/**
 * 该文件讲解JS经典排序算法代码示例
 */

// 待排序数组
const arr = [12, 1, 7, 5, 8,33, 4, 9, 24, 2, 6];  // 奇数个子元素

/** 
 * 归并排序 
 * @param arr 要排序的数组
 * */
function mergeSort(arr) {
    // 若数组分割后仅剩1个以下元素，直接返回
    if(arr.length <= 1) {  
        return arr;
    }
    // console.log("当前入参", arr);
    let mid = Math.floor(arr.length / 2);
    // 将数组分为左右2个部分
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // 递归对左右两部分排序并合并结果
    return merge(mergeSort(left), mergeSort(right));
}

// 合并两个已排序数组
function merge(left, right) {
    let result = [];
    // console.log("传入左右数组", left, right)
    let leftIndex = 0;
    let rightIndex = 0;
    // 比较两个数组元素，并排序
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // 若左侧还有剩余元素
    while(leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    // 若右侧还有剩余元素
    while(rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    // console.log("排序后数组：", result);
    return result;
}

function arraySort(arr) {
    if(type == "merge") {
       return mergeSort(arr);
    }
} 



// 排序类型：merge 归并
const type = "merge"
const sortedArr = arraySort(arr, type);
console.log("原始数组和排序后数组：", arr, sortedArr);